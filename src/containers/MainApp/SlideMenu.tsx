import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const SlideMenu = () => {
	return (
		<Menu
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['tech_procurement']}
			mode='inline'>
			<Menu.Item key='dashboard'>
				<Link to='/app' className='site-menu'>
					{/*  */}
					<img src='/icons/Mask Group 8.svg' alt='icon' />
					<strong style={{ padding: '15px' }}> Dashboard</strong>{' '}
				</Link>
			</Menu.Item>

			{/*  */}
			<Menu.Item key='activities menu'>
				<Link to='#' className='site-menu'>
					{/*  */}
					<img src='/icons/list.svg' alt='icon' />
					<strong style={{ padding: '15px' }}> Activities Menu </strong>{' '}
				</Link>
			</Menu.Item>

			<SubMenu
				key='tech_procurement'
				title={
					<strong>
						<img src='/icons/tech_procurement.svg' alt='icon' />
						<span style={{ padding: '15px' }}> Tech Procurement </span>{' '}
					</strong>
				}>
				<Menu.Item key='MTO'>
					<Link to='/app/tech-procurement/mto' className='site-menu'>
						<span style={{ padding: '15px' }}> MTO </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='User_Requisition'>
					<Link
						to='/app/tech-procurement/user-requisition'
						className='site-menu'>
						<span style={{ padding: '15px' }}> User Requisition </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='justification'>
					<Link
						to='/app/tech-procurement/justification-of-award'
						className='site-menu'>
						<span style={{ padding: '15px' }}> Jusitification of Award </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='contract award'>
					<Link to='/app/tech-procurement/contract-award' className='site-menu'>
						<span style={{ padding: '15px' }}> Contract Award </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='project milestone'>
					<Link
						to='/app/tech-procurement/project-milestone'
						className='site-menu'>
						<span style={{ padding: '15px' }}> Project Milestone </span>{' '}
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
						<span style={{ padding: '15px' }}> Reports </span>{' '}
					</strong>
				}>
				<Menu.Item key='daily reports'>
					<Link to='#' className='site-menu'>
						<span style={{ padding: '15px' }}> Daily reports </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item key='Construction Reports'>
					<Link to='#' className='site-menu'>
						<span style={{ padding: '15px' }}> Construction Reports</span>{' '}
					</Link>
				</Menu.Item>

				<Menu.Item key='non-confirmance report'>
					<Link to='#' className='site-menu'>
						<span style={{ padding: '15px' }}> Non-Conformance Report </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>

			{/* ==== Admin ===== */}
			<SubMenu
				key='admin'
				title={
					<strong>
						<img src='/icons/admin.svg' alt='icon' />
						<span style={{ padding: '15px' }}> Admin </span>{' '}
					</strong>
				}>
				<Menu.Item key='register user'>
					<Link to='#' className='site-menu'>
						<span style={{ padding: '15px' }}> Register User </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

export default SlideMenu;
