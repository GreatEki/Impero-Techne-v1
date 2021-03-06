import React, { Fragment } from 'react';
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
	Space,
	Empty,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import { RootStore } from 'appRedux/Store';

const { Header, Content } = Layout;

const MTO: React.FC = () => {
	const history = useHistory();

	const { mtoList } = useSelector((state: RootStore) => state.mto);

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
							<h4>Material Take Off (MTO)</h4>
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
							<button
								onClick={() => history.push(`/app/tech-procurement/create-mto`)}
								className='btn-xlg'>
								{' '}
								Create MTO{' '}
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
											Project Name
										</th>
										<th scope='col' className='txt-small'>
											Project Number
										</th>
										<th scope='col' className='txt-small'>
											Form Type
										</th>
										<th scope='col' className='txt-small'>
											{' '}
											No of Items
										</th>
										<th scope='col' className='txt-small'>
											{' '}
											Status{' '}
										</th>
									</tr>
								</thead>

								<tbody>
									{mtoList.length ? (
										mtoList.map((proj, index) => {
											return (
												<tr key={index}>
													<th scope='row' style={{ width: '20rem' }}>
														<Link
															to={`/app/tech-procurement/view-mto/${proj.projectInfo.project_id}`}>
															<span className='word-break word-wrap'>
																{proj.projectInfo.project_name}
															</span>
														</Link>
													</th>

													<td>{proj.projectInfo.project_id}</td>
													<td>{proj.projectInfo.discipline}</td>
													<td>
														{proj.addedItems ? proj.addedItems.length : 0}
													</td>
													<td className='p-3'>
														<Tag
															className='tags'
															color={
																proj.status === 'Approved'
																	? 'green'
																	: proj.status === 'Rejected'
																	? 'red'
																	: proj.status === 'Queried'
																	? 'orange'
																	: 'blue'
															}>
															{' '}
															{proj.status}
														</Tag>{' '}
													</td>
												</tr>
											);
										})
									) : (
										<tr>
											<td className='text-center' colSpan={5}>
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
		</>
	);
};

export default MTO;
