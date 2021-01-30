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
	Button,
} from 'antd';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import { getAllClients } from 'appRedux/actions/adminModuleActions';
import { getAllProjects } from 'appRedux/actions/MiscellaneousActions';
import { RootStore } from 'appRedux/Store';
import { userReq_ProjectInfoI } from 'appRedux/types/userRequisitionTypes';
import { addUserReqProjectInfo } from 'appRedux/actions/userRequisitionActions';

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

	const [formState, setFormState] = useState<userReq_ProjectInfoI>({
		request_title: '',
		project_name: '',
		client_name: '',
		request_type: '',
	});

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

	// Method handles the data entries of the form
	const handleFormInputs = (key: string, value: string | number) => {
		setFormState({ ...formState, [key]: value });
	};

	const handleSubmit = (formState: userReq_ProjectInfoI) => {
		dispatch(addUserReqProjectInfo(formState));
		next();
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
											label={
												<strong>
													Request Title <span className='text-danger'>*</span>
												</strong>
											}>
											<Input
												value={formState.request_title}
												onChange={(e) =>
													handleFormInputs(
														'request_title',
														e.currentTarget.value
													)
												}
												size='large'
												placeholder='Name this Request Form'
											/>
										</Form.Item>

										<Form.Item
											label={
												<strong>
													Project <span className='text-danger'>*</span>
												</strong>
											}>
											<Select
												onChange={(value: string | number) =>
													handleFormInputs('project_name', value)
												}
												showSearch={true}
												optionFilterProp='children'
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
											label={
												<strong>
													Client <span className='text-danger'>*</span>
												</strong>
											}>
											<Select
												onChange={(value: string | number) =>
													handleFormInputs('client_name', value)
												}
												showSearch={true}
												optionFilterProp='children'
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
											<Radio.Group
												size='large'
												onChange={(e) =>
													handleFormInputs('request_type', e.target.value)
												}>
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
												<Button
													onClick={() => handleSubmit(formState)}
													className='btn-xlg'>
													Continue
												</Button>
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
