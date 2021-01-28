import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logOut } from 'appRedux/actions/userActions';

const Logout: React.FC = (props) => {
	return (
		<>
			<Link to='#' onClick={() => logOut(props)}>
				Log Out
			</Link>
		</>
	);
};

export default withRouter(Logout);
