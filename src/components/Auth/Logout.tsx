import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logOut } from 'appRedux/actions/userActions';
import * as BiIcon from 'react-icons/bi';
const Logout: React.FC = (props) => {
	return (
		<>
			<Link to='#' onClick={() => logOut(props)}>
				<BiIcon.BiLogOutCircle /> Log Out
			</Link>
		</>
	);
};

export default withRouter(Logout);
