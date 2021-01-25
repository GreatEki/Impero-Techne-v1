import React, { useState } from 'react';
import App from '../../components/DGSMainApp/Routes';
import SlideMenu from './SlideMenu';
import './mainapp.css';

import { Layout } from 'antd';

const { Sider } = Layout;

const NextApp = () => {
	const [sidebar, setSidebar] = useState(true);

	const toggleSideBar = () => setSidebar(!sidebar);
	return (
		<>
			<Layout>
				<Sider
					width={300}
					style={{ background: 'white' }}
					breakpoint='lg'
					collapsedWidth='0'
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}>
					<img src='/icons/Group 19.svg' className='logo' />
					<SlideMenu />
				</Sider>
				<Layout>
					<App />
				</Layout>
			</Layout>
		</>
	);
};

export default NextApp;
