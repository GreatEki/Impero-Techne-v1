import React from 'react';
import { Link } from 'react-router-dom';
import * as AntIcons from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';
import { Layout, Avatar, Dropdown, Collapse, Space } from 'antd';

import FormDetailsPanel from './FormDetailsPanel';
import ProductDetailsPanel from './ProductDetailsPanel';
import AddedProductsPanel from './AddedProductsPanel';
import ServiceDetailFormPanel from './ServiceDetailFormPanel';
import ServiceDetailsView from './ServiceDetailsView';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';

import { useSelector } from 'react-redux';
import { RootStore } from 'appRedux/Store';

const { Header, Content } = Layout;

const { Panel } = Collapse;

interface Props {
	next: () => void;
}
const RequisitionDetails: React.FC<Props> = ({ next }) => {
	const { userReq_ProjectInfo, productStorageItems } = useSelector(
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
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Form Details{' '}
									</label>
								}
								key='form-details'>
								<FormDetailsPanel />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right'>
							{userReq_ProjectInfo.request_type === 'Product' ? (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>
											{' '}
											<BsIcon.BsDot className='site-dot' /> Product Details{' '}
										</label>
									}
									key='prod-details'>
									<ProductDetailsPanel />
								</Panel>
							) : (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>
											{' '}
											<BsIcon.BsDot className='site-dot' /> Service Details{' '}
										</label>
									}
									key='service-details'>
									<ServiceDetailFormPanel />
								</Panel>
							)}
						</Collapse>

						<Collapse expandIconPosition='right'>
							{userReq_ProjectInfo.request_type === 'Service' ? (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>
											{' '}
											<BsIcon.BsDot className='site-dot' /> Service Details{' '}
										</label>
									}
									key='service-list'>
									<ServiceDetailsView />
								</Panel>
							) : (
								<Panel
									className='my-3'
									header={
										<label className='muted-font'>
											<BsIcon.BsDot className='site-dot' />
											Added Product Details ( {productStorageItems.length} Items
											){' '}
										</label>
									}
									key='product-list'>
									<AddedProductsPanel next={next} />
								</Panel>
							)}
						</Collapse>
					</div>
				</Content>
			</Layout>
		</>
	);
};

export default RequisitionDetails;
