import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button, Avatar } from 'antd';
import Slidemenu from './SlideMenu';
import './mainapp.css';
import App from '../../components/DGSMainApp/Routes';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const NextApp = () => {
	const [collapsed, setCollapsed] = useState(false);

	// const toggleCollapsed = () => {
	// 	setCollapsed(!collapsed);
	// };
	const onCollapse = (collapsed: any) => {
		setCollapsed(collapsed);
	};

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className='appContainer'>
			<section className='slidemenu-wrapper'>
				{/* <Link to='#' className='logo-wrapper'> */}
				<img src='/icons/Group 19.svg' className='logo' />
				{/* </Link> */}
				<Slidemenu />
			</section>

			<section className='contentWrapper'>
				<App />
			</section>
		</div>
	);
};

export default NextApp;
