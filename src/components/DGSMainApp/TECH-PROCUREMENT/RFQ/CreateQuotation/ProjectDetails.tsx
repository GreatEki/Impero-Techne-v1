import React from 'react';
import { Link } from 'react-router-dom';
import {
	Layout,
	Row,
	Col,
	Card,
	Avatar,
	Input,
	Dropdown,
	Space,
	Button,
	Form,
	Select,
	Checkbox,
	Radio,
	DatePicker,
} from 'antd';
import * as AntIcons from 'react-icons/ai';
import UserProfileMenu from 'containers/UserProfileMenu/UserProfileMenu';
import StepIndex from './StepIndex';

const { Header, Content } = Layout;
const { Option } = Select;

interface Props {
	currentPage: number;
}

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const ProjectDetails: React.FC<Props> = ({ currentPage }) => {
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
						style={{ flex: 1, padding: '1.5rem 4rem' }}
						className='d-flex justify-content-between'>
						<Link to='/app/tech-procurement/rfq'>
							<h3>
								<AntIcons.AiOutlineArrowLeft /> Create Quotation{' '}
							</h3>
						</Link>

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

					<Card className='mt-3'>
						<Row gutter={50}>
							<Col span={22} offset={1}>
								<Form {...formLayout}>
									<Row gutter={50} justify='space-between'>
										<Col span={12}>
											<span className='muted-font'>
												<span className='text-danger'>*</span> Fill in Project
												Details to create MTO for the Project{' '}
											</span>
										</Col>

										<Col span={12}>
											<StepIndex current={currentPage} />
										</Col>
									</Row>

									<Row className='mt-5'>
										<Col span={20}>
											<Form.Item
												label={
													<span className='fw-bold'>Quotation Title</span>
												}>
												<Input
													size='large'
													placeholder='Name this Quotation form'
													className='round'
												/>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={20}>
											<Form.Item
												label={<span className='fw-bold'>RFX Name</span>}>
												<Select size='large'>
													<Option value={'1'}> RFX1 </Option>
												</Select>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={12}>
											<Form.Item
												label={<span className='fw-bold'>RFX Category </span>}>
												<Select size='large'>
													<Option value={'1'}> RFX1 </Option>
												</Select>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={12}>
											<Form.Item
												label={
													<span className='fw-bold'>RFX Sub-Category </span>
												}>
												<Select size='large'>
													<Option value={'sub1'}> RFX sub 1 </Option>
												</Select>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={12}>
											<Form.Item
												label={<span className='fw-bold'>Specialization</span>}>
												<Checkbox.Group style={{ width: '100%' }}>
													<Row>
														<Col span={12}>
															<Checkbox> Major </Checkbox>
														</Col>
														<Col span={12}>
															<Checkbox> Specialization </Checkbox>
														</Col>
													</Row>
													<Row className='mt-3'>
														<Col span={12}>
															<Checkbox> Minor </Checkbox>
														</Col>
													</Row>
												</Checkbox.Group>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={12}>
											<Form.Item
												label={
													<span className='fw-bold'>
														Pick which is applicable
													</span>
												}>
												<Radio.Group style={{ width: '100%' }}>
													<Row>
														<Col span={12}>
															<Radio
																key='Project Consurtium'
																value='Project Consurtium'>
																Project Consurtium
															</Radio>
														</Col>
														<Col span={12}>
															<Radio
																key='Vendor Subcontractor'
																value='Vendor Subcontractor'>
																Vendor Subcontractor
															</Radio>
														</Col>
													</Row>
													<Row className='mt-3'>
														<Col span={12}>
															<Radio
																key='Company Subcontractor'
																value='Company Subcontractor'>
																{' '}
																Company Subcontractor
															</Radio>
														</Col>
													</Row>
												</Radio.Group>
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={6}>
											<Form.Item
												label={<span className='fw-bold'>Number needed</span>}>
												<Input size='large' placeholder='0' className='round' />
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Form.Item
											label={<span className='fw-bold'>RFQ Type</span>}>
											<Col span={24}>
												<Radio.Group size='large'>
													<Radio key='Single' value='Single'>
														{' '}
														<span>Single</span>{' '}
													</Radio>
													<Radio key='Double' value='Double'>
														{' '}
														<span>Double</span>{' '}
													</Radio>
													<Radio key='Commercial' value='Commercial'>
														{' '}
														<span>Commercial</span>{' '}
													</Radio>
												</Radio.Group>
											</Col>
										</Form.Item>
									</Row>

									<Row>
										<Col span={8}>
											<Form.Item
												label={<span className='fw-bold'>Expiry Date</span>}>
												<DatePicker size='large' style={{ width: '100%' }} />
											</Form.Item>
										</Col>
									</Row>

									<Row>
										<Col span={4}>
											<Button className='btn-xlg'>Continue</Button>
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

export default ProjectDetails;
