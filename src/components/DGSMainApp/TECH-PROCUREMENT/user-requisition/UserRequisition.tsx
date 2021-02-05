import React from 'react';
import { useSelector } from 'react-redux';
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
	Empty,
	Space,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import { RootStore } from 'appRedux/Store';

const { Header, Content } = Layout;

const UserRequisition: React.FC = () => {
	const history = useHistory();

	const { requisitions } = useSelector(
		(state: RootStore) => state.userRequisition
	);

	console.log(requisitions);
	const getTagColor = (status: string) => {
		let color = '';
		if (status === 'Approved') {
			color = 'green';
			// return (color = 'bg-success');
		}
		if (status === 'Rejected') {
			color = 'red';
			// return (color = 'bg-danger');
		}
		if (status === 'Queried') {
			color = 'orange';
			// return (color = 'bg-warning');
		}

		return color;
	};

	return (
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
					<div>
						<h3>User Requisition Forms</h3>
					</div>

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
									alt='prop'
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
				<Row className='mt-3' justify='space-between' gutter={[50, 20]}>
					<Col xs={16} sm={16} md={8} lg={6}>
						<button
							onClick={() =>
								history.push(`/app/tech-procurement/create-requisition`)
							}
							className='btn-xlg'>
							{' '}
							Create Requisition{' '}
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
										Request Title
									</th>
									<th scope='col' className='txt-small'>
										Project Name
									</th>
									<th scope='col' className='txt-small'>
										Client
									</th>
									<th scope='col' className='txt-small'>
										{' '}
										Form Type{' '}
									</th>
									<th scope='col' className='txt-small'>
										{' '}
										No of Items{' '}
									</th>
									<th scope='col' className='txt-small'>
										{' '}
										Status{' '}
									</th>
								</tr>
							</thead>

							<tbody>
								{requisitions.length ? (
									requisitions.map((req, index) => {
										return (
											<tr key={index}>
												<th scope='row' style={{ width: '20rem' }}>
													<Link
														to={`/app/tech-procurement/view-requisition/${req.project_info.project_id}`}>
														<span className='word-break word-wrap'>
															{req.project_info.request_title}
														</span>
													</Link>
												</th>

												<td>
													<strong>{req.project_info.project_name}</strong>
												</td>
												<td>
													<strong>{req.project_info.client_name}</strong>
												</td>
												<td>
													<strong>{req.project_info.request_type}</strong>
												</td>
												<td>
													<strong>
														{req.products ? req.products.length : 0}
													</strong>
												</td>
												<td className='p-3'>
													<Tag
														className='tags'
														color={
															req.status === 'Approved'
																? 'green'
																: req.status === 'Rejected'
																? 'red'
																: req.status === 'Queried'
																? 'orange'
																: 'blue'
														}>
														{' '}
														{req.status}
													</Tag>{' '}
												</td>
											</tr>
										);
									})
								) : (
									<tr>
										<td className='text-center' colSpan={6}>
											<Empty />
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</section>
				</Card>
			</Content>
		</Layout>
	);
};

export default UserRequisition;
