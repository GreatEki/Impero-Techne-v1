import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import MainApp from './containers/MainApp';
import 'antd/dist/antd.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter forceRefresh={true}>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/app' component={MainApp} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
