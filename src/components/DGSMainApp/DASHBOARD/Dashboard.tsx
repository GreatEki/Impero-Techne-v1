import React from 'react';
import { Layout, Row, Col, Card, Dropdown, Avatar } from 'antd';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import * as TiIcons from 'react-icons/ti';
import Notifications from './Notifications';

const { Header, Footer, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
	return (
		<>
			<Layout style={{ display: 'flex', minHeight: '100vh' }}>
				<Header
					style={{
						background: 'whitesmoke',
						display: 'flex',
						justifyContent: 'space-between',
						height: '5em',
						padding: 0,
					}}>
					<section
						style={{ flex: 1 }}
						className='d-flex py-4 px-5 justify-content-between'>
						<div>
							<h4>Dashboard</h4>
						</div>

						<strong className='hide'>
							{' '}
							<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />{' '}
							<span>Gift Okobia </span>
							<Dropdown
								overlay={<UserProfileMenu />}
								placement='bottomCenter'
								arrow>
								<img src='/icons/chevron-down.svg' alt='prop' />
							</Dropdown>
						</strong>
					</section>
				</Header>
				<Content
					style={{
						flexGrow: 1,
						margin: '16px 20px 16px 20px',
					}}>
					<Row gutter={50} justify='space-between'>
						{/* ====== Left Grid ======  */}
						<Col xs={24} md={24} lg={12}>
							<section className='d-flex justify-content-between'>
								<strong>
									<TiIcons.TiChartArea className='site-primary' /> Request
									Statistics
								</strong>
								<strong className='muted-font'>
									{' '}
									Total Requests<strong> 20 </strong>{' '}
								</strong>
							</section>

							<Notifications />
						</Col>
						{/* ====== End of Left Grid ======  */}

						{/* ====== Right Grid ====== */}
						<Col xs={24} md={24} lg={12}></Col>
						{/* ====== End of  Right Grid ====== */}
					</Row>
				</Content>
			</Layout>
		</>
	);
};

export default Dashboard;
