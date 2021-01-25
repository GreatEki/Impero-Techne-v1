import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';
import * as MdIcon from 'react-icons/md';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';

const Header = styled.div`
	background: #F5F5F5;
	height: 80px;
	display: flex;
	justify-content: flex-start,
	align-items: center;
`;

const HamburgerMenu = styled(Link)`
	margin-left: 2rem;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SideBarNav = styled.div`
	background: #000000;
	width: 300px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
`;

const SlideMenu = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSideBar = () => setSidebar(!sidebar);

	return (
		<>
			<Header>
				<HamburgerMenu to='#'>
					<MdIcon.MdMenu onClick={toggleSideBar} />
				</HamburgerMenu>
			</Header>
			<SideBarNav sidebar={sidebar}>
				{SideBarData.map((menuItem, index) => {
					return <SubMenu menuItem={menuItem} key={index} />;
				})}
			</SideBarNav>
		</>
	);
};

export default SlideMenu;
