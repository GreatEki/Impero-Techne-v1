import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout,
	Avatar,
	Dropdown,
	Menu,
	Card,
	Form,
	Row,
	Col,
	Input,
	Select,
	Radio,
} from 'antd';
import * as AntIcons from 'react-icons/ai';

const { Header, Content } = Layout;
const { Option } = Select;

interface Props {
	next: () => void;
}

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const ProjectDetailsForm: React.FC<Props> = ({ next }) => {
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
						style={{ flex: 1 }}
						className='d-flex py-4 px-5 justify-content-between'>
						<Link to='/app/tech-procurement/mto'>
							<h3>
								<AntIcons.AiOutlineArrowLeft /> Create MTO{' '}
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

					<Card>
						<Row gutter={50}>
							<Col
								xs={{ span: 22, offset: 1 }}
								sm={{ span: 22, offset: 1 }}
								md={{ span: 20, offset: 2 }}
								lg={{ span: 20, offset: 2 }}>
								<Form {...formLayout}>
									<Row gutter={50}>
										<Col span={20} offset={2}>
											<p className='muted-font'>
												<span className='text-danger'>*</span> Fill in Project
												Details to create MTO for the Project{' '}
											</p>

											<Form.Item
												name='project_name'
												label={<strong> Project Name </strong>}
												rules={[{ required: true }]}>
												<Select
													placeholder='Search for Project Name'
													size='large'>
													<Option value='projectName'> Project Name </Option>
													<Option value='projectName'>
														{' '}
														Project projectName{' '}
													</Option>
												</Select>
											</Form.Item>

											{/*  */}
											<Form.Item
												name='client_name'
												label={<strong> Client's Name </strong>}
												rules={[{ required: true }]}>
												<Select
													placeholder="Search for Client's Name"
													size='large'>
													<Option value='projectName'> Project Name </Option>
													<Option value='projectName'>
														{' '}
														Project projectName{' '}
													</Option>
												</Select>
											</Form.Item>

											{/*  */}
											<Form.Item
												name='company_name'
												label={<strong> Company Name </strong>}
												rules={[{ required: true }]}>
												<Select
													placeholder='Search for Company Name'
													size='large'>
													<Option value='projectName'> Project Name </Option>
													<Option value='projectName'>
														{' '}
														Project projectName{' '}
													</Option>
												</Select>
											</Form.Item>

											<Form.Item name='discipline' label='Discipline'>
												<Radio.Group>
													<Radio key='electrical-mto' value='electrical mto'>
														{' '}
														<strong>Electrical MTO</strong>{' '}
													</Radio>
													<Radio key='piping-mto' value='Piping MTO'>
														{' '}
														<strong>Piping MTO</strong>{' '}
													</Radio>
													<Radio key='civil-mto' value='Civil MTo'>
														{' '}
														<strong>Civil MTo</strong>{' '}
													</Radio>
													<Radio
														key='instrumentation-mto'
														value='Instrumentation MTO'>
														{' '}
														<strong>Instrumentation MTO</strong>{' '}
													</Radio>
												</Radio.Group>
											</Form.Item>

											{/*  */}
											<Form.Item
												name='discipline_subType'
												label={<strong> Discipline Sub Type </strong>}
												rules={[{ required: true }]}>
												<Select placeholder='Select---' size='large'>
													<Option value='projectName'> Project Name </Option>
													<Option value='projectName'>
														{' '}
														Project projectName{' '}
													</Option>
												</Select>
											</Form.Item>

											{/*  */}
											<Form.Item
												name='requestForm_name'
												label={<strong> Name this Request Form </strong>}
												rules={[{ required: true }]}>
												<Input size='large' />
											</Form.Item>

											<Row>
												<Col span={4}>
													<Form.Item>
														<button
															onClick={next}
															className='btn-xlg site-blue text-white'>
															{' '}
															Continue{' '}
														</button>
													</Form.Item>
												</Col>
											</Row>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</Card>
				</Content>
			</Layout>
		</div>
	);
};

export default ProjectDetailsForm;
