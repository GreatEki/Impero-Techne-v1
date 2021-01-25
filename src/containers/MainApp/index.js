import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button, Avatar } from 'antd';
import Slidemenu from './SlideMenu';
import './mainapp.css';
import App from '../../components/DGSMainApp/Routes';
import styled from 'styled-components';
import * as MdIcon from 'react-icons/md';
import SubMenu from './SubMenu';
import { SideBarData } from './SideBarData';

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
`;

const Header = styled.div`
background: #F5F5F5;
height: 80px;
display: flex;
justify-content: flex-start,
align-items: center;
`;

const HamburgerMenu = styled(Link)`
	margin-left: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const SideBar = styled.div`
	background: #ffffff;
	width: 350px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
	transition: 350ms;
`;

const SideBarWrap = styled.div`
	width: 100%;
	min-height: 100vh;
	::-webkit-scrollbar-button:end {
		height: 50px;
		width: 30%;
	}
	::-webkit-scrollbar-button:start {
		height: 50px;
		width: 30%;
	}
`;

const ContentWrapper = styled.div`
	background: whitesmoke;
	width: 75%;
	right: ${({ sidebar }) => (sidebar ? '20rem' : '0')};
`;

const NextApp = () => {
	const [sidebar, setSidebar] = useState(true);

	const toggleSideBar = () => setSidebar(!sidebar);
	return (
		<>
			<Header>
				<HamburgerMenu to='#'>
					<MdIcon.MdMenu onClick={toggleSideBar} />
				</HamburgerMenu>
			</Header>
			<div className='appContainer'>
				{/* SideMenu */}
				<SideBar sidebar={sidebar}>
					<SideBarWrap>
						{SideBarData.map((menuItem, index) => {
							return <SubMenu menuItem={menuItem} />;
						})}
					</SideBarWrap>
				</SideBar>

				<ContentWrapper>
					<App />
				</ContentWrapper>
			</div>
		</>
	);
};

export default NextApp;
