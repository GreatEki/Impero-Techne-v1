import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Avatar, Dropdown, Menu, Collapse } from 'antd';
import * as AntIcons from 'react-icons/ai';

import ProjectInfo from './ProjectInfo';
import MTOFormDetails from './MTOFormDetails';
import AddMTOItem from './AddMTOItem';
import AddedItemsPanel from './AddedItemsPanel';

const { Header, Content } = Layout;

const { Panel } = Collapse;

const MTODetails: React.FC = () => {
	const menu = (
		<Menu>
			<Menu.Item>
				<Link to='#'>View Profile</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='#'>Log Out</Link>
			</Menu.Item>
		</Menu>
	);
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
						<Link to='/app/mto'>
							<h3>
								{' '}
								<AntIcons.AiOutlineArrowLeft /> Create MTO{' '}
							</h3>
						</Link>

						<strong>
							{' '}
							<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />{' '}
							<span>Gift Okobia </span>
							<Dropdown overlay={menu} placement='bottomCenter' arrow>
								<img
									src='/icons/chevron-down.svg'
									className='ml-4'
									alt='prop
                                '
								/>
							</Dropdown>
						</strong>
					</section>
				</Header>
				<Content
					style={{
						flexGrow: 1,
						margin: '16px 20px 16px 20px',
					}}>
					{/*  */}

					<Collapse accordion>
						<Panel className='my-3' header='Project Info' key='1'>
							<ProjectInfo />
						</Panel>
						<Panel className='my-3' header='MTO Form Details' key='2'>
							<MTOFormDetails />
						</Panel>
						<Panel className='my-3' header='Add MTO Item' key='3'>
							<AddMTOItem />
						</Panel>
						<Panel
							className='my-3'
							header='Added Items (1 items Added)'
							key='4'>
							<AddedItemsPanel />
						</Panel>
					</Collapse>
				</Content>
			</Layout>
		</>
	);
};

export default MTODetails;
