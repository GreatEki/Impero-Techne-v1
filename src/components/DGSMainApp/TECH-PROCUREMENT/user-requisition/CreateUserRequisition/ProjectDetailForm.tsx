import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Layout,
	Row,
	Col,
	Card,
	Avatar,
	Input,
	Form,
	Dropdown,
	Menu,
	Select,
	Radio,
} from 'antd';

const { Header, Content } = Layout;
const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const ProjectDetailForm: React.FC = () => {
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
					<h3>Create User Requisition Form</h3>

					<strong>
						{' '}
						<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />{' '}
						<span>Gift Okobia </span>
						<Dropdown overlay={menu} placement='bottomCenter' arrow>
							<img src='/icons/chevron-down.svg' className='ml-4' alt='prop' />
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
						<Col span={20} offset={2}>
							<Row gutter={50}>
								<Col span={20} offset={2}>
									<Form {...formLayout}>
										<Form.Item
											name='instruction'
											label={
												<span>
													Fill in Project Details to create a User Requisition
													Form
												</span>
											}
											rules={[{ required: true }]}></Form.Item>

										<Form.Item
											name='request_title'
											label={<strong>Request Title</strong>}
											rules={[{ required: true }]}>
											<Input
												size='large'
												placeholder='Name this Request Form'
											/>
										</Form.Item>

										<Form.Item
											name='project_name'
											label={<strong>Project</strong>}
											rules={[{ required: true }]}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												<Option value='project1'>Project1</Option>
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={<strong>Client</strong>}
											rules={[{ required: true }]}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												<Option value='client1'>Client1</Option>
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={<strong>Client</strong>}
											rules={[{ required: true }]}>
											<Radio.Group size='large'>
												<Radio key='product' value='Product'>
													{' '}
													<strong>Product</strong>
												</Radio>
												<Radio key='service' value='Service'>
													{' '}
													<strong>Service</strong>
												</Radio>
											</Radio.Group>
										</Form.Item>

										<Row>
											<Col span={4}>
												<button className='btn-xlg site blue text-white'>
													Continue
												</button>
											</Col>
										</Row>
									</Form>
								</Col>
							</Row>
						</Col>
					</Row>
				</Card>
			</Content>
		</Layout>
	);
};

export default ProjectDetailForm;
