import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import * as BsIcon from 'react-icons/bs';
import * as FiIcon from 'react-icons/fi';
import * as BiIcon from 'react-icons/bi';

const { SubMenu } = Menu;

const SideMenu = () => {
	return (
		<Menu
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['tech_procurement']}
			mode='inline'>
			<Menu.Item
				key='dashboard'
				style={{
					background: 'white',
				}}>
				<Link to='/app' className='site-admin-menu'>
					{/*  */}
					<strong>
						<BsIcon.BsHouseDoor />
						<span style={{ padding: '10px' }}> Dashboard</span>
					</strong>{' '}
				</Link>
			</Menu.Item>

			<SubMenu
				key='site-report'
				title={
					<strong className='site-admin-menu'>
						<FiIcon.FiShoppingCart />
						<span style={{ padding: '15px' }}> Site Report </span>{' '}
					</strong>
				}>
				<Menu.Item
					key='daily-report'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Daily Report</span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item
					key='construction-report'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Construction Report </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item
					key='non-conformance-report'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Non Conformance Report </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>

			<Menu.Item
				key='register-user'
				style={{
					background: 'white',
				}}>
				<Link to='#' className='site-admin-menu'>
					{/*  */}
					<strong>
						<BiIcon.BiUser />{' '}
						<span style={{ padding: '10px' }}> Register User </span>
					</strong>{' '}
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default SideMenu;
