import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Layout, Space, Avatar, Dropdown } from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';

import { RootStore } from 'appRedux/Store';
import { RequisitionsI } from 'appRedux/types/userRequisitionTypes';
import * as BsIcon from 'react-icons/bs';

import FormDetails from './FormDetails';
import Service from './Service';
import DeliveryInfo from './DeliveryInfo';

const { Header, Content } = Layout;
const { Panel } = Collapse;

const ViewRequisition = (props: any) => {
	const reqId = props.match.params.id;

	// Bringing our requisitions from our redux state
	const { requisitions } = useSelector(
		(state: RootStore) => state.userRequisition
	);

	const [theReq, setTheReq] = useState<RequisitionsI | undefined>({
		project_info: {
			project_id: '',
			request_title: '',
			project_name: '',
			client_name: '',
			request_type: '',
		},
		products: [],
		service: {
			intro_and_desc: '',
			scope_of_works: '',
			reference_code_and_stds: '',
			detailed_desc_of_work_and_specs: '',
			technical_eval_req: '',
			reference_drawings: '',
			work_schedule: '',
			commercial: '',
			terms_and_conditions: '',
			payment_terms: '',
			renumeration: '',
			validity_period: '',
			delivery_address: '',
			special_instructions: '',
			date_required_on_site: '',
		},
		otherDetails: {
			detailed_spec: '',
			ref_code: '',
			terms_and_cond: '',
			sellers_country: '',
			sellers_state: '',
			sellers_city: '',
			delivery_address: '',
			date_req_onsite: '',
			other_info: '',
			del_special_instruction: '',
			other_special_instructions: '',
			spares_required: false,
			after_sales: false,
		},
		status: 'Opened',
	});

	useEffect(() => {
		getRequisition();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reqId]);

	function getRequisition() {
		const foundRequisition = requisitions.find(
			(requisition) => requisition.project_info.project_id === reqId
		);

		setTheReq(foundRequisition);
	}
	return (
		<div>
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
								<AntIcons.AiOutlineArrowLeft /> View Requisition{' '}
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
							defaultActiveKey={['form-details']}>
							<Panel
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Form Details{' '}
									</label>
								}
								key='form-details'>
								<FormDetails theReq={theReq} />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right' className='mt-3'>
							<Panel
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Service Details{' '}
									</label>
								}
								key='2'>
								<Service theReq={theReq} />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right' className='mt-3'>
							<Panel
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Delivery Information{' '}
									</label>
								}
								key='3'>
								<DeliveryInfo theReq={theReq} />
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right' className='mt-3'>
							<Panel
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Added MTO{' '}
									</label>
								}
								key='3'>
								<p> Added MTO </p>
							</Panel>
						</Collapse>

						<Collapse expandIconPosition='right' className='mt-3'>
							<Panel
								header={
									<label className='muted-font'>
										{' '}
										<BsIcon.BsDot className='site-dot' /> Added Products{' '}
									</label>
								}
								key='3'>
								<p> Added Products </p>
							</Panel>
						</Collapse>
					</div>
				</Content>
			</Layout>
		</div>
	);
};

export default ViewRequisition;
