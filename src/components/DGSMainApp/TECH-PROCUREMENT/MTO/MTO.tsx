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
	Menu,
	Button,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import '../techprocurement.css';

const { Header, Content } = Layout;

const MTO: React.FC = () => {
	const history = useHistory();
	const dataSource = [
		{
			project_name:
				'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
			project_no: 'GEJJR2962986219 ',
			form_type: 'Instrumentation',
			no_of_items: 72,
			status: 'Approved',
		},
		{
			project_name:
				'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
			project_no: 'GEJJR2962986219 ',
			form_type: 'Instrumentation',
			no_of_items: 72,
			status: 'Queried',
		},
		{
			project_name:
				'Engineering, Procurement and Construction of 10 Gas Pipelines from PAOC to Oredo Flow Station',
			project_no: 'GEJJR2962986219 ',
			form_type: 'Instrumentation',
			no_of_items: 72,
			status: 'Rejected',
		},
	];

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
						style={{ flex: 1 }}
						className='d-flex py-4 px-5 justify-content-between'>
						<div>
							<h4>Material Take Off (MTO)</h4>
						</div>

						<strong className='hide'>
							{' '}
							<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />{' '}
							<span>Gift Okobia </span>
							<Dropdown overlay={menu} placement='bottomCenter' arrow>
								<img src='/icons/chevron-down.svg' alt='prop' />
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
					<Row className='mt-3' justify='space-between' gutter={[50, 20]}>
						<Col xs={12} sm={12} md={6} lg={4}>
							<button
								onClick={() => history.push(`/app/tech-procurement/create-mto`)}
								className='btn-xlg site-blue text-white'>
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
									{dataSource.map((proj, index) => {
										return (
											<tr key={index}>
												<th scope='row' style={{ width: '25rem' }}>
													<span className='word-break word-wrap'>
														{proj.project_name}
													</span>
												</th>

												<td>{proj.project_no}</td>
												<td>{proj.form_type}</td>
												<td>{proj.no_of_items}</td>
												<td className='p-3'>
													<Tag
														className='tags'
														color={getTagColor(proj.status)}>
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

export default MTO;
