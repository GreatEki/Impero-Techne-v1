import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Logout from 'components/Auth/Logout';
const UserProfileMenu = () => {
	return (
		<>
			<Menu>
				<Menu.Item>
					<Link to='#'>View Profile</Link>
				</Menu.Item>
				<Menu.Item>
					<Logout />
				</Menu.Item>
			</Menu>
		</>
	);
};

export default UserProfileMenu;
