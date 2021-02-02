import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Form, Select, Button } from 'antd';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface UserI {
	firstName: string;
	lastName: string;
	emal: string;
	phoneNumber: string;
	password: string;
	confirmPassword: string;
	staffNumber: string;
	companyId: number;
	roleId: number;
}
const RegisterUser = () => {
	const [user, setUser] = useState<UserI>({
		firstName: '',
		lastName: '',
		emal: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
		staffNumber: '',
		companyId: 0,
		roleId: 0,
	});

	const handleChange = (key: string, value: string | number) => {
		setUser({ ...user, [key]: value });
	};

	const handleSubmit = (user: UserI) => {
		console.log(user);
	};

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
									onChange={(e) =>
										handleChange('firstName', e.currentTarget.value)
									}
									className='adminInput'
									size='large'
									placeholder='firstName'
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>LastName</label>}>
								<Input
									onChange={(e) =>
										handleChange('lastName', e.currentTarget.value)
									}
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
									onChange={(e) => handleChange('email', e.currentTarget.value)}
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
									onChange={(e) =>
										handleChange('phoneNumber', e.currentTarget.value)
									}
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
								<Select
									onChange={(value: number) => handleChange('companyId', value)}
									size='large'
									className='adminInput'>
									<Option value={0}>DGS Integrated Services</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Role</label>}>
								<Select
									onChange={(value: number) => handleChange('roleId', value)}
									size='large'
									className='adminInput'>
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
									onChange={(e) =>
										handleChange('password', e.currentTarget.value)
									}
									type='password'
									className='adminInput'
									size='large'
									placeholder='Enter Passwor#ebf4fad'
								/>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								label={<label className='fw-bold'>Confirm Password</label>}>
								<Input
									onChange={(e) =>
										handleChange('confirmPassword', e.currentTarget.value)
									}
									type='password'
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
									onChange={(e) =>
										handleChange('staffNumber', e.currentTarget.value)
									}
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
								onClick={() => handleSubmit(user)}
								style={{
									backgroundColor: '#ebf4fa',
									border: 'none',
									padding: '0.3em 1em',
									width: '100%',
									borderRadius: '0.3rem',
								}}>
								{' '}
								Submit{' '}
							</Button>
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};

export default RegisterUser;
