import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import asyncComponent from 'utils/asyncComponent';

const Routes = () => {
	const match = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route
					exact
					path={`${match.url}`}
					component={asyncComponent(() => import('./SiteReport/SiteReport'))}
				/>
			</Switch>
		</div>
	);
};

export default Routes;
