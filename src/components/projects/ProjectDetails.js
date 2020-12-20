import React from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetails = (props) => {
	const {project, auth} = props;
		if (!auth.uid) return <Redirect to="/signin" />

	if (project) {
		return (
			<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title"> {project.title}</span>
					<p>{project.content}</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>{project.authorFirstName} {project.authorLastName}</div>
					<div>3rd of December</div>
				</div>
			</div>
		</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading Project...</p>
			</div>
			)
		}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	// console.log(state)

	// only return IF we have projects in the collection
	const project = projects ? projects[id] : null;
	return {
		project,
		auth: state.firebase.auth

	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects'}
	])
)(ProjectDetails
)