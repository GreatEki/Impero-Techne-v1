import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const SlideMenu = () => {
	return (
		<Menu
			// style={{ width: 256 }}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['tech_procurement']}
			mode='inline'>
			<Menu.Item key='dashboard'>
				<Link to='#'>
					{/*  */}
					<img src='/icons/Mask Group 8.svg' alt='icon' />
					<strong style={{ padding: '10px' }}> Dashboard</strong>{' '}
				</Link>
			</Menu.Item>

			{/*  */}
			<Menu.Item key='activities menu'>
				<Link to='#'>
					{/*  */}
					<img src='/icons/list.svg' alt='icon' />
					<strong style={{ padding: '10px' }}> Activities Menu </strong>{' '}
				</Link>
			</Menu.Item>

			<SubMenu
				key='tech_procurement'
				// icon={}
				title={
					<strong>
						<img src='/icons/tech_procurement.svg' alt='icon' />
						<span style={{ padding: '10px' }}> Tech Procurement </span>{' '}
					</strong>
				}>
				<Menu.Item key='MTO'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> MTO </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='User_Requisition'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> User Requisition </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='justification'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Jusitification of Award </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='contract award'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Contract Award </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='project milestone'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Project Milestone </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>

			{/* ==== Reports Sub Menu ===== */}
			<SubMenu
				key='reports'
				title={
					<strong>
						{/*  */}
						<img src='/icons/reports.svg' alt='icon' />
						<span style={{ padding: '10px' }}> Reports </span>{' '}
					</strong>
				}>
				<Menu.Item key='daily reports'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Daily reports </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='Construction Reports'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Construction Reports</span>{' '}
					</Link>
				</Menu.Item>

				<Menu.Item key='non-confirmance report'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Non-Conformance Report </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>

			{/* ==== Admin ===== */}
			<SubMenu
				key='admin'
				title={
					<strong>
						<img src='/icons/admin.svg' alt='icon' />
						<span style={{ padding: '10px' }}> Admin </span>{' '}
					</strong>
				}>
				<Menu.Item key='register user'>
					<Link to='#'>
						<span style={{ padding: '10px' }}> Register User </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

export default SlideMenu;
