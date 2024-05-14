// core
import React, {Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProgressBar from "react-topbar-progress-indicator";
import routes from '../../routes';

import './Default.scss';

const Default = () => {

	return (
		<div className="mt-15">
			<Suspense fallback={<ProgressBar/>}>
				<Switch>
					{routes.map((route, idx) => {
						return route.component && (
							<Route
								key={idx}
								path={route.path}
								exact={route.exact}
								name={route.name}
								render={props => (
									<route.component {...props} />
								)}/>
						)
					})}
					<Redirect from="/" to="/dashboard"/>
				</Switch>
			</Suspense>
		</div>
	);

};

export default Default;