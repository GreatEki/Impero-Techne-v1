import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import SideMenu from './SideMenu';
import App from 'components/ADMIN/Routes';
import * as AiIcon from 'react-icons/ai';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const Index: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};
	return (
		<Layout>
			<Header
				className='site-layout-background'
				style={{
					padding: '0 3rem',
					background: 'white',
					position: 'fixed',
					zIndex: 4,
					width: '100%',
					height: '100px',
					boxShadow: '2px 2px lightgrey',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<div>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: 'trigger',
							onClick: toggle,
						}
					)}
					<img
						src='/icons/dgs-logo.svg'
						style={{ marginLeft: '1rem' }}
						alt='prop'
					/>
				</div>
				<div>
					<AiIcon.AiOutlinePoweroff />
				</div>
			</Header>

			<Layout className='site-layout'>
				{/* <Layout> */}
				<Sider
					width={300}
					style={{ background: 'white' }}
					trigger={null}
					collapsible
					collapsed={collapsed}
					breakpoint='lg'
					collapsedWidth='0'
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}>
					<div style={{ marginTop: '6rem' }}>
						<SideMenu />
					</div>
				</Sider>
				{/* </Layout> */}
				<Layout>
					<Content
						className='site-layout'
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<div
							className='site-layout-background'
							style={{ padding: 24, minHeight: '100vh' }}>
							<App />
						</div>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default Index;
