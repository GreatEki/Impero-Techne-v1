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

interface Props {
	next: () => void;
}

const ProjectDetailForm: React.FC<Props> = ({ next }) => {
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
										<h5 className='mb-5'>
											<span className='text-danger'>*</span>Fill in Project
											Details to create a User Requisition Form
										</h5>

										<Form.Item
											name='request_title'
											label={
												<strong>
													<span className='text-danger'>*</span>Request Title
												</strong>
											}>
											<Input
												size='large'
												placeholder='Name this Request Form'
											/>
										</Form.Item>

										<Form.Item
											name='project_name'
											label={
												<strong>
													<span className='text-danger'>*</span>Project
												</strong>
											}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												<Option value='project1'>Project1</Option>
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={
												<strong>
													<span className='text-danger'>*</span>Client
												</strong>
											}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												<Option value='client1'>Client1</Option>
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={
												<strong>
													<span className='text-danger'>*</span>Client
												</strong>
											}>
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
												<Form.Item>
													<button
														onClick={next}
														className='btn-xlg site blue text-white'>
														Continue
													</button>
												</Form.Item>
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
