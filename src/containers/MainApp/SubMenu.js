import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarMainItem = styled(Link)`
	display: flex;
	color: #00b0f0;
	justify-content: space-between;
	padding: 20px;
	height: 60px;
	list-style: none;
	text-decoration: none;
	font-size: 18px;

	&:hover {
		background: #ffffff;
		border-right: 4px solid #00b0f0;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 16px;
`;

const DropdownLink = styled(Link)`
	height: 60px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	color: #00b0f0;
	font-size: 18px;
	transition: 500ms;

	&:hover {
		background: whitesmoke;
		cursor: pointer;
	}

	&:focus {
		color: #00b0f0;
	}
`;

const SubMenu = ({ menuItem }) => {
	const [showSubNav, setShowSubNav] = useState(false);

	const toggleSubNav = () => setShowSubNav(!showSubNav);
	return (
		<>
			<SidebarMainItem
				to={menuItem.path}
				onClick={menuItem.subNav && toggleSubNav}>
				<div>
					<img src={menuItem.iconPath} alt='prop' />
					<SidebarLabel>{menuItem.title}</SidebarLabel>
				</div>
				<div>
					{menuItem.subNav && showSubNav
						? menuItem.iconOpen
						: menuItem.subNav
						? menuItem.iconClosed
						: null}
				</div>
			</SidebarMainItem>
			{showSubNav &&
				menuItem.subNav.map((item, index) => {
					return (
						<DropdownLink to={item.path} key={index}>
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
