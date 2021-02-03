import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Layout,
	Avatar,
	Dropdown,
	Empty,
	Card,
	Form,
	Row,
	Col,
	Input,
	Select,
	Radio,
	Space,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import { getAllCompanies } from 'appRedux/actions/MiscellaneousActions';
import { RootStore } from 'appRedux/Store';
import { addProjectInfo } from 'appRedux/actions/mtoActions';
import { ProjectInfoI } from 'appRedux/types/mtoTypes';

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
	const [projectInfo, setProjectInfo] = useState<ProjectInfoI>({
		project_name: '',
		client_name: '',
		company_name: '',
		discipline: '',
		discipline_subType: '',
		request_formName: '',
	});

	const [errors, setErrors] = useState<ProjectInfoI | null>({
		project_name: '',
		client_name: '',
		company_name: '',
		discipline: '',
		discipline_subType: '',
		request_formName: '',
	});

	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			await dispatch(getAllCompanies());
			// await dispatch(getAllProjects());
			// await dispatch(getAllClients());
		})();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Load in AllProject and AllCompanies from redux store display in form fields
	const { companies } = useSelector((state: RootStore) => state.miscellaneous);

	const projects = [
		{
			projectId: '1',
			projectName: 'Igando Housing Block',
		},
		{
			projectId: '2',
			projectName: 'Twin Tower',
		},
		{
			projectId: '3',
			projectName: 'Lukas Office Suites',
		},
		{
			projectId: '4',
			projectName: 'Midas Road Constructions',
		},
	];

	const clients = [
		{
			clientId: '1',
			clientName: 'Apex Limited',
		},
		{
			clientId: '2',
			clientName: 'Total',
		},
		{
			clientId: '3',
			clientName: 'Simplex Solutions',
		},
	];

	const validation = (projectInfo: ProjectInfoI) => {
		let errors: ProjectInfoI | null = {
			project_name: '',
			client_name: '',
			company_name: '',
			discipline: '',
			discipline_subType: '',
			request_formName: '',
		};

		if (!projectInfo.project_name) {
			errors.project_name = 'Project Name is required';
		}
		if (!projectInfo.client_name) {
			errors.client_name = 'Client Name is required';
		}
		if (!projectInfo.company_name) {
			errors.company_name = 'Company Name is required';
		}
		if (!projectInfo.discipline) {
			errors.discipline = 'Discipline is required is required';
		}

		if (!projectInfo.discipline_subType) {
			errors.discipline_subType = 'Enter Discipline Subtype';
		}
		if (!projectInfo.request_formName) {
			errors.request_formName = 'Enter a Form Name';
		}

		if (
			projectInfo.project_name &&
			projectInfo.client_name &&
			projectInfo.company_name &&
			projectInfo.discipline &&
			projectInfo.discipline_subType &&
			projectInfo.request_formName
		) {
			errors = null;
		}

		return errors;
	};

	// Method handles the data entries of the form
	const handleFormInputs = (key: string, value: string | number) => {
		setProjectInfo({ ...projectInfo, [key]: value });
	};

	// handles submit action
	const handleSubmit = (projectInfo: ProjectInfoI) => {
		// console.log(projectInfo);

		const valErrors = validation(projectInfo);
		if (valErrors) {
			setErrors(valErrors);
		} else {
			dispatch(addProjectInfo(projectInfo, dispatch));
			next();
		}
	};
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
						style={{ flex: 1, padding: '1rem 4rem' }}
						className='d-flex justify-content-between'>
						<Link to='/app/tech-procurement/mto'>
							<h3>
								<AntIcons.AiOutlineArrowLeft /> Create MTO{' '}
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
												// name='project_name'
												label={<strong> Project Name </strong>}
												rules={[{ required: true }]}>
												<Select
													onChange={(value: number) =>
														handleFormInputs('project_name', value)
													}
													showSearch={true}
													optionFilterProp='children'
													placeholder='Search for Project Name'
													size='large'>
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
												{errors?.project_name && (
													<span className='text-danger'>
														{' '}
														{errors.project_name}
													</span>
												)}
											</Form.Item>

											{/*  */}
											<Form.Item
												// name='client_name'
												label={<strong> Client's Name </strong>}
												rules={[{ required: true }]}>
												<Select
													onChange={(value: number) =>
														handleFormInputs('client_name', value)
													}
													showSearch={true}
													optionFilterProp='children'
													placeholder="Search for Client's Name"
													size='large'>
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
												{errors?.client_name && (
													<p className='text-danger'> {errors.client_name}</p>
												)}
											</Form.Item>

											{/*  */}
											<Form.Item
												// name='company_name'
												label={<strong> Company Name </strong>}
												rules={[{ required: true }]}>
												<Select
													onChange={(value: number) =>
														handleFormInputs('company_name', value)
													}
													showSearch={true}
													optionFilterProp='children'
													placeholder='Search for Company Name'
													size='large'>
													{companies ? (
														companies.map((company) => (
															<Fragment key={company.companyId}>
																<Option value={company.companyName}>
																	{' '}
																	{company.companyName}{' '}
																</Option>
															</Fragment>
														))
													) : (
														<>
															<Empty />
														</>
													)}
												</Select>
												{errors?.company_name && (
													<p className='text-danger'> {errors.company_name}</p>
												)}
											</Form.Item>

											<Form.Item label='Discipline'>
												<Radio.Group
													size='large'
													onChange={(e) =>
														handleFormInputs('discipline', e.target.value)
													}>
													<Radio key='electrical-mto' value='Electrical MTO'>
														{' '}
														<strong>Electrical MTO</strong>{' '}
													</Radio>
													<Radio key='piping-mto' value='Piping MTO'>
														{' '}
														<strong>Piping MTO</strong>{' '}
													</Radio>
													<Radio key='civil-mto' value='Civil MTO'>
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
												{errors?.discipline && (
													<p className='text-danger'> {errors.discipline} </p>
												)}
											</Form.Item>

											{/*  */}
											<Form.Item
												// name='discipline_subType'
												label={<strong> Discipline Sub Type </strong>}
												rules={[{ required: true }]}>
												<Select
													onChange={(value: number) =>
														handleFormInputs('discipline_subType', value)
													}
													showSearch={true}
													optionFilterProp='children'
													placeholder='Select---'
													size='large'>
													<Option value='sub-discipline1'>
														{' '}
														sub-discipline1
													</Option>
													<Option value='sub-discipline2'>
														{' '}
														sub-discipline2
													</Option>
												</Select>
												{errors?.discipline_subType && (
													<p className='text-danger'>
														{' '}
														{errors.discipline_subType}{' '}
													</p>
												)}
											</Form.Item>

											{/*  */}
											<Form.Item
												// name='requestForm_name'
												label={<strong> Name this Request Form </strong>}
												rules={[{ required: true }]}>
												<Input
													size='large'
													onChange={(e) =>
														handleFormInputs(
															'request_formName',
															e.currentTarget.value
														)
													}
												/>
												{errors?.request_formName && (
													<p className='text-danger'>
														{' '}
														{errors.request_formName}{' '}
													</p>
												)}
											</Form.Item>

											<Row>
												<Col span={4}>
													<Form.Item>
														<button
															onClick={() => handleSubmit(projectInfo)}
															className='btn-xlg'>
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
