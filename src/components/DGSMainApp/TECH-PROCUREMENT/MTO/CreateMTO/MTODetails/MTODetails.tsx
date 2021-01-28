import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout,
	Avatar,
	Dropdown,
	Space,
	Collapse,
	Card,
	Row,
	Col,
} from 'antd';
import * as AntIcons from 'react-icons/ai';

import ProjectInfo from './ProjectInfo';
import MTOFormDetails from './MTOFormDetails';
import AddMTOItem from './AddMTOItem';
import AddedItemsPanel from './AddedItemsPanel';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';

const { Header, Content } = Layout;

const { Panel } = Collapse;

const MTODetails: React.FC = () => {
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
						style={{ flex: 1, padding: '1.5rem 4rem' }}
						className='d-flex justify-content-between'>
						<Link to='/app/tech-procurement/mto'>
							<h3>
								{' '}
								<AntIcons.AiOutlineArrowLeft /> Create MTO{' '}
							</h3>
						</Link>

						<strong className='hide'>
							<Avatar
								size={50}
								src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
							/>{' '}
							<Space size='middle'>
								<span>Gift Okobia </span>
								<Dropdown
									overlay={<UserProfileMenu />}
									placement='bottomCenter'
									arrow>
									<img
										src='/icons/chevron-down.svg'
										className='ml-4'
										alt='prop
                                '
									/>
								</Dropdown>
							</Space>
						</strong>
					</section>
				</Header>
				<Content
					style={{
						flexGrow: 1,
						margin: '16px 20px 16px 20px',
					}}>
					{/*  */}
					<Card>
						<Row className='my-3' align='middle' justify='space-between'>
							<Col span={4}>
								<strong>MTO Info</strong>
							</Col>
							<Col span={4}>
								<button className='btn-xlg text-white'>Add</button>
							</Col>
						</Row>

						<Collapse
							expandIconPosition='right'
							defaultActiveKey={['projectInfo']}>
							<Panel className='my-3' header='Project Info' key='projectInfo'>
								<ProjectInfo />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header='MTO Form Details'
								key='mtoFormDetail'>
								<MTOFormDetails />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel className='my-3' header='Add MTO Item' key='addMTOItem'>
								<AddMTOItem />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header='Added Items (1 items Added)'
								key='addedItemsPanel'>
								<AddedItemsPanel />
							</Panel>
						</Collapse>
						{/*  */}

						<Row className='my-3' align='middle' justify='space-between'>
							<Col span={4}>
								<button className='site-btn-danger'>Cancel</button>
							</Col>
							<Col span={4}>
								<button className='btn-xlg text-white'>Add</button>
							</Col>
						</Row>
					</Card>
				</Content>
			</Layout>
		</>
	);
};

export default MTODetails;
