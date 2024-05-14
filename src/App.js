import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// components
import ProgressBar from "react-topbar-progress-indicator";

import './App.css';

const Layout = React.lazy(() => import('./layouts/default/Default'));

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Suspense fallback={<ProgressBar/>}>
					<Switch>
						<Route path="/" name="Home" render={props => <Layout {...props}/>}/>
					</Switch>
				</React.Suspense>
			</BrowserRouter>
		);
	}
}

export default App;
