import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLink from './SignedOutLink';
// connec to redux user state
import {connect} from 'react-redux';

const Nav = (props) => {
	const {auth} = props;
	// console.log(auth)
	const links = auth.uid ? <SignedInLinks /> : <SignedOutLink />;
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Marioplan </Link>
				{links}
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Nav);