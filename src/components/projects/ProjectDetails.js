import React from 'react'

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id} </span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur aliquid ipsa animi doloremque iure, sit eos! Ratione qui, commodi earum a vel quis reiciendis beatae nobis corrupti, perspiciatis nemo!</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by AC</div>
					<div>3rd of December</div>
				</div>
			</div>
		</div>
		)
}

export default ProjectDetails
