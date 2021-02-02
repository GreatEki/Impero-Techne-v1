import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { RootStore } from 'appRedux/Store'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useSelector((state) => state.user);
	return (
		<Route
			{...rest}
			render={(props) =>
				user.token ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/' }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
