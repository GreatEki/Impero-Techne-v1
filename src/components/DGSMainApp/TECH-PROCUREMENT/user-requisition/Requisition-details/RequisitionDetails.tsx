import React from 'react';
import { Link } from 'react-router-dom';
import * as AntIcons from 'react-icons/ai';
import { Layout, Avatar, Dropdown, Collapse, Space } from 'antd';

import FormDetailsPanel from './FormDetailsPanel';
import ProductDetailsPanel from './ProductDetailsPanel';
import AddedProductsPanel from './AddedProductsPanel';
import ServiceDetailFormPanel from './ServiceDetailFormPanel';
import ServiceDetailsView from './ServiceDetailsView';
import DeliveryInfoPanel from './DeliveryInfoPanel';
import AddedMTOPanel from './AddedMTOPanel';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';

import { useSelector } from 'react-redux';
import { RootStore } from 'appRedux/Store';

const { Header, Content } = Layout;

const { Panel } = Collapse;

const RequisitionDetails: React.FC = () => {
	const { userReq_ProjectInfo } = useSelector(
		(state: RootStore) => state.userRequisition
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
						style={{ flex: 1, padding: '1.5rem 4rem' }}
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

					<div className='mt-5'>
						<Collapse
							expandIconPosition='right'
							defaultActiveKey='form-details'>
							<Panel
								className='my-3'
								header={<label className='muted-font'>Form Details </label>}
								key='form-details'>
								<FormDetailsPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							{userReq_ProjectInfo.request_type === 'Product' ? (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>Product Details </label>
									}
									key='product-detail'>
									<ProductDetailsPanel />
								</Panel>
							) : (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>Service Details </label>
									}
									key='service-detail-form'>
									<ServiceDetailFormPanel />
								</Panel>
							)}
						</Collapse>

						<Collapse expandIconPosition='right'>
							{userReq_ProjectInfo.request_type === 'Service' ? (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>Service Details </label>
									}
									key='service-view'>
									<ServiceDetailsView />
								</Panel>
							) : (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>Added Product Details </label>
									}
									key='added-prod-service'>
									<AddedProductsPanel />
								</Panel>
							)}
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header={<label className='muted-font'>Delivery Info</label>}
								key='delivery-info'>
								<DeliveryInfoPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							<Panel
								className='my-3'
								header={<label className='muted-font'>Added MTO</label>}
								key='added-mto'>
								<AddedMTOPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'></Collapse>
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default RequisitionDetails;
