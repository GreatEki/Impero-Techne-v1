import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as AntIcons from 'react-icons/ai';
import {
	Layout,
	Row,
	Col,
	Card,
	Avatar,
	Input,
	Form,
	Dropdown,
	Select,
	Radio,
	Space,
	Empty,
} from 'antd';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import { getAllClients } from 'appRedux/actions/adminModuleActions';
import { getAllProjects } from 'appRedux/actions/MiscellaneousActions';
import { RootStore } from 'appRedux/Store';

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
	const dispatch = useDispatch();

	const [formState, setFormState] = useState();

	useEffect(() => {
		(async () => {
			await dispatch(getAllClients());
			await dispatch(getAllProjects());
		})();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Load in AllProject from redux store display in form fields
	const { projects } = useSelector((state: RootStore) => state.miscellaneous);

	// Load in AllClients from redux store to display in form fields
	const { clients } = useSelector((state: RootStore) => state.adminModule);

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
					className='d-flex justify-content-between'>
					<Link to='/app/tech-procurement/user-requisition'>
						<h3>
							<AntIcons.AiOutlineArrowLeft /> Create User Requisition Form{' '}
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

				<Card>
					<Row gutter={50}>
						<Col
							xs={{ span: 22, offset: 1 }}
							sm={{ span: 22, offset: 1 }}
							md={{ span: 20, offset: 2 }}
							lg={{ span: 20, offset: 2 }}>
							<Row gutter={50}>
								<Col span={20} offset={2}>
									<Form {...formLayout}>
										<strong className='muted-font'>
											<span className='text-danger'>*</span> Fill in Project
											Details to create a User Requisition Form
										</strong>

										<Form.Item
											className='mt-5'
											name='request_title'
											label={
												<strong>
													Request Title <span className='text-danger'>*</span>
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
													Project <span className='text-danger'>*</span>
												</strong>
											}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												{projects ? (
													projects.map((project) => (
														<Fragment key={project.projectId}>
															<Option value={project.projectName}>
																{' '}
																{project.projectName}{' '}
															</Option>
														</Fragment>
													))
												) : (
													<>
														{' '}
														<Empty />{' '}
													</>
												)}
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={
												<strong>
													Client <span className='text-danger'>*</span>
												</strong>
											}>
											<Select
												size='large'
												placeholder='Search for a Project Name'>
												{clients ? (
													clients.map((client) => (
														<Option
															key={client.clientId}
															value={client.clientName}>
															{client.clientName}{' '}
														</Option>
													))
												) : (
													<>
														{' '}
														<Empty />{' '}
													</>
												)}
											</Select>
										</Form.Item>

										<Form.Item
											name='client'
											label={
												<strong>
													{' '}
													Request Type <span className='text-danger'>*</span>
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

										<Row gutter={50}>
											<Col span={6}>
												<button
													onClick={next}
													className='btn-xlg site blue text-white'>
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
