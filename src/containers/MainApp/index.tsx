import React from 'react';
import App from '../../components/DGSMainApp/Routes';
import SlideMenu from './SlideMenu';
import './mainapp.css';

import { Layout } from 'antd';

const { Sider } = Layout;

const NextApp = () => {
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
					<img src='/icons/dgs-logo.svg' className='logo' alt='prop' />
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
