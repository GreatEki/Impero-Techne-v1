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
					path={`${match.url}/tech-procurement/mto`}
					component={asyncComponent(() => import('./TECH-PROCUREMENT/MTO/MTO'))}
				/>
				<Route
					exact
					path={`${match.url}/tech-procurement/create-mto`}
					component={asyncComponent(
						() => import('./TECH-PROCUREMENT/MTO/CreateMTO/CreateMtoIIndex')
					)}
				/>

				<Route
					exact
					path={`${match.url}/tech-procurement/view-mto/:id`}
					component={asyncComponent(
						() => import('./TECH-PROCUREMENT/MTO/ViewMTO/ViewMTO')
					)}
				/>
				<Route
					exact
					path={`${match.url}/tech-procurement/user-requisition`}
					component={asyncComponent(
						() => import('./TECH-PROCUREMENT/user-requisition/UserRequisition')
					)}
				/>
				<Route
					exact
					path={`${match.url}/tech-procurement/create-requisition`}
					component={asyncComponent(
						() =>
							import(
								'./TECH-PROCUREMENT/user-requisition/CreateUserRequisition/CreateRequisitionIndex'
							)
					)}
				/>
				<Route
					exact
					path={`${match.url}/tech-procurement/rfq`}
					component={asyncComponent(() => import('./TECH-PROCUREMENT/RFQ/RFQ'))}
				/>
				<Route
					exact
					path={`${match.url}/tech-procurement/create-quotation`}
					component={asyncComponent(
						() => import('./TECH-PROCUREMENT/RFQ/CreateQuotation/Index')
					)}
				/>
			</Switch>
		</div>
	);
};

export default Routes;
