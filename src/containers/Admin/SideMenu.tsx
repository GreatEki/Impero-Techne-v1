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
				<Link to='#' className='site-admin-menu'>
					{/*  */}
					<strong>
						<BsIcon.BsHouseDoor />
						<span style={{ padding: '10px' }}> Dashboard</span>
					</strong>{' '}
				</Link>
			</Menu.Item>

			<SubMenu
				key='tech_procurement'
				title={
					<strong className='site-admin-menu'>
						<FiIcon.FiShoppingCart />
						<span style={{ padding: '15px' }}> Site Report </span>{' '}
					</strong>
				}>
				<Menu.Item
					key='User_Requisition'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Daily Report</span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item
					key='justification'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Construction Report </span>{' '}
					</Link>
				</Menu.Item>
				<Menu.Item
					key='MTO'
					style={{
						background: 'white',
					}}>
					<Link to='#' className='site-admin-menu'>
						<span style={{ padding: '15px' }}> Non Conformance Report </span>{' '}
					</Link>
				</Menu.Item>
			</SubMenu>

			<Menu.Item
				key='user'
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
