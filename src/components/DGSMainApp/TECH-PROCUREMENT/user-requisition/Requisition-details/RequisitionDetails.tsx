import React from 'react';
import { Link } from 'react-router-dom';
import * as AntIcons from 'react-icons/ai';
import { Layout, Avatar, Dropdown, Menu, Collapse } from 'antd';

import FormDetailsPanel from './FormDetailsPanel';
import ProductDetailsPanel from './ProductDetailsPanel';
import AddedProductsPanel from './AddedProductsPanel';
import ServiceDetailFormPanel from './ServiceDetailFormPanel';
import ServiceDetailsView from './ServiceDetailsView';

const { Header, Content } = Layout;

const { Panel } = Collapse;

const RequisitionDetails: React.FC = () => {
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
						<Link to='/app/tech-procurement/user-requisition'>
							<h3>
								{' '}
								<AntIcons.AiOutlineArrowLeft /> Create User Requisition form{' '}
							</h3>
						</Link>

						<strong className='hide'>
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

					<div className='mt-5'>
						<Collapse
							expandIconPosition='right'
							defaultActiveKey='form-details'>
							<Panel className='my-3' header='Form Details' key='form-details'>
								<FormDetailsPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header='Product Details'
								key='prod-detail'>
								<ProductDetailsPanel />
							</Panel>
							<Panel
								className='my-3'
								header='Service Details'
								key='service-detail'>
								<ServiceDetailFormPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header='Service Details'
								key='service-detail-view'>
								<ServiceDetailsView />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header='Added Product Details'
								key='added-prod-service'>
								<AddedProductsPanel />
							</Panel>
						</Collapse>
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default RequisitionDetails;
