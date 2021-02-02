import React from 'react';
import { Card, Row, Col, Divider, Input, Form, Select, Button } from 'antd';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const RegisterUser = () => {
	return (
		<div>
			<Card>
				<section className='d-flex justify-content-center'>
					<strong> User Registration </strong>
				</section>

				<Divider />

				<Form {...formLayout}>
					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>FirstName</label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='firstName'
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>LastName</label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='lastName'
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Email </label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='email'
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								label={<label className='fw-bold'>Phone Number</label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='Phone number'
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Company </label>}>
								<Select size='large' className='adminInput'>
									<Option value='DGS'>DGS Integrated Services</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Role</label>}>
								<Select size='large' className='adminInput'>
									<Option value='DGS'>Admin</Option>
									<Option value='Checker'>Checker</Option>
									<Option value='Staff'>Staff</Option>
									<Option value='Authorizer'>Authorizer</Option>
									<Option value='VendorAdmin'>VendorAdmin</Option>
									<Option value='Vendor'>Vendor</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Password </label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='Enter Password'
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								label={<label className='fw-bold'>Confirm Password</label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='Confirm Password'
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50}>
						<Col span={12}>
							<Form.Item
								label={<label className='fw-bold'>Staff Number </label>}>
								<Input
									className='adminInput'
									size='large'
									placeholder='staffNumber'
								/>
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50} className='mt-3'>
						<Col span={5}>
							<Button
								style={{
									backgroundColor: '#ebf4fa',
									border: 'none',
									padding: '0.3em 1em',
									width: '100%',
									borderRadius: '0.3rem',
								}}>
								{' '}
								SUBMIT{' '}
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};

export default RegisterUser;
