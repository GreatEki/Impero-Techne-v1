import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import MainApp from './containers/MainApp';
import Admin from './containers/Admin/index';
import 'antd/dist/antd.css';
import PrivateRoute from 'config/ProtectedRoutes';

function App() {
	// const [token, setToken] = useState<string | null>('');
	// useEffect(() => {
	// 	let accessToken = localStorage.getItem('token');
	// 	accessToken = accessToken ? JSON.parse(accessToken) : null;
	// 	setToken(accessToken);
	// }, []);
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route path='/app' component={MainApp} />
					<PrivateRoute path='/admin' component={Admin} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
