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
					component={asyncComponent(() => import('./DASHBOARD/Dashboard'))}
				/>
				<Route
					exact
					path={`${match.url}/mto`}
					component={asyncComponent(() => import('./TECH-PROCUREMENT/MTO'))}
				/>
				<Route
					exact
					path={`${match.url}/create-mto`}
					component={asyncComponent(
						() => import('./TECH-PROCUREMENT/CreateMTO/CreateMtoIIndex')
					)}
				/>
			</Switch>
		</div>
	);
};

export default Routes;
