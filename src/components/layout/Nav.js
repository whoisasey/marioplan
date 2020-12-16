import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLink from './SignedOutLink';

const Nav = () => {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Marioplan </Link>
				<SignedInLinks />
				<SignedOutLink />
			</div>
		</nav>
	)
}

export default Nav;