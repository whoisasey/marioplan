import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLink from './SignedOutLink';
// wait until we are logged in to render Nav
import {isLoaded } from 'react-redux-firebase';
// connec to redux user state
import {connect} from 'react-redux';

const Nav = (props) => {
	const {auth, profile} = props;
	// console.log(auth)
	const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLink />;
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Marioplan </Link>
				
				{auth.isLoaded && links}
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Nav);