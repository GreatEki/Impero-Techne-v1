import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Layout,
	Row,
	Col,
	Card,
	Avatar,
	Input,
	Tag,
	Dropdown,
	Space,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';

const dataSource = [
	{
		id: 1,
		quotation_title:
			'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
		category: 'Product Vendors',
		sub_category: 'Electrical',
		specialization: 'Major, Minor',
		rfq_type: 'Double',
		status: 'Approved',
	},
	{
		id: 2,
		quotation_title:
			'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
		category: 'Product Vendors',
		sub_category: 'Instrumentation',
		specialization: 'Major, Minor',
		rfq_type: 'Double',
		status: 'Approved',
	},
	{
		id: 3,
		quotation_title:
			'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
		category: 'Product Vendors',
		sub_category: 'Instrumentation',
		specialization: 'Major, Minor',
		rfq_type: 'Commercial',
		status: 'Queried',
	},
	{
		id: 4,
		quotation_title:
			'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
		category: 'Product Vendors',
		sub_category: 'Instrumentation',
		specialization: 'Major, Minor',
		rfq_type: 'Single',
		status: 'Rejected',
	},
];

const { Header, Content } = Layout;
const RFQ = () => {
	const history = useHistory();
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
						<div>
							<h4> Request for Quotation </h4>
						</div>

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
									<img src='/icons/chevron-down.svg' alt='prop' />
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
					<Row className='mt-3' justify='space-between' gutter={[50, 20]}>
						<Col xs={18} sm={18} md={6} lg={4}>
							<button onClick={() => history.push(`/app/`)} className='btn-xlg'>
								{' '}
								Create Quotation{' '}
							</button>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<section className='d-flex justify-content-between'>
								<Input
									size='large'
									placeholder='search'
									suffix={<AntIcons.AiOutlineSearch />}
								/>

								<div className='d-flex p-2'>
									<img src='/icons/sound-mix.svg' className='p-2' alt='prop' />
									<h5 className='p-1'>Filter </h5>
								</div>
							</section>
						</Col>
					</Row>
					{/*  */}

					<Card className='mt-3'>
						<section className='table-responsive'>
							<table className='table table-striped table-borderless'>
								<thead>
									<tr>
										<th scope='col' className='txt-small'>
											{' '}
											Quotation Title
										</th>
										<th scope='col' className='txt-small'>
											Category
										</th>
										<th scope='col' className='txt-small'>
											Sub-Category
										</th>
										<th scope='col' className='txt-small'>
											{' '}
											Specialization
										</th>
										<th scope='col' className='txt-small'>
											{' '}
											RFQ Type{' '}
										</th>
										<th scope='col' className='txt-small'>
											{' '}
											Status{' '}
										</th>
									</tr>
								</thead>

								<tbody>
									{dataSource.map((proj, index) => {
										return (
											<tr key={index}>
												<th scope='row' style={{ width: '25rem' }}>
													<Link
														to={`/app/tech-procurement/view-mto/${proj.id}`}>
														<span className='word-break word-wrap'>
															{proj.quotation_title}
														</span>
													</Link>
												</th>

												<td>{proj.category}</td>
												<td>{proj.sub_category}</td>
												<td>{proj.specialization}</td>
												<td>{proj.rfq_type}</td>
												<td className='p-3'>
													<Tag
														className='tags'
														color={
															proj.status === 'Approved'
																? 'green'
																: proj.status === 'Rejected'
																? 'red'
																: 'orange'
														}>
														{' '}
														{proj.status}
													</Tag>{' '}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</section>
					</Card>
				</Content>
			</Layout>
		</>
	);
};

export default RFQ;
