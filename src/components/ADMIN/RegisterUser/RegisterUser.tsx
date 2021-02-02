import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Form, Select, Button } from 'antd';
import passwordValidator from 'password-validator';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface UserI {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
	confirmPassword: string;
	staffNumber: string;
	companyId: number | string;
	roleId: number | string;
}
const RegisterUser = () => {
	const [user, setUser] = useState<UserI>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
		staffNumber: '',
		companyId: 0,
		roleId: 0,
	});
	const [validationErrors, setValidationErrors] = useState<UserI | null>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
		staffNumber: '',
		companyId: '',
		roleId: '',
	});

	const checkErrors = (user: UserI) => {
		let errors: UserI | null = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
			staffNumber: '',
			companyId: '',
			roleId: '',
		};

		const valSchema = new passwordValidator();

		if (!user.firstName) {
			errors.firstName = 'Firstname is required';
		}
		if (!user.lastName) {
			errors.lastName = 'LastName is required';
		}
		if (!user.email) {
			errors.email = 'Email is required field';
		}

		const isvalid = validateEmail(user.email);
		if (!isvalid) {
			errors.email = 'Enter a valid Email';
		}
		if (!user.phoneNumber) {
			errors.phoneNumber = 'Please enter Phone Number';
		}
		if (!user.password) {
			errors.password = 'Enter a password';
		}

		if (!user.companyId) {
			errors.companyId = 'Select a company';
		}
		if (!user.roleId) {
			errors.roleId = 'Select user role';
		}
		if (user.password !== user.confirmPassword) {
			errors.confirmPassword = 'Password do not match';
		}

		valSchema.has().digits(1).has().uppercase().has().lowercase();
		const isValidPw = valSchema.validate(user.password);

		if (!isValidPw) {
			errors.password =
				'Minimum of 8 characters and must contain an upper & lower case letter, a digit and a special character';
		}

		if (
			user.firstName &&
			user.lastName &&
			user.email &&
			user.phoneNumber &&
			user.password &&
			user.confirmPassword &&
			user.companyId &&
			user.roleId &&
			isvalid
		) {
			errors = null;
		}
		return errors;
	};

	function validateEmail(email: string) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	const handleChange = (key: string, value: string | number) => {
		setUser({ ...user, [key]: value });
	};

	const handleSubmit = (user: UserI) => {
		// Check for Errors
		const valErrors = checkErrors(user);
		if (valErrors) {
			setValidationErrors(valErrors);
		} else {
			setValidationErrors(valErrors);
			console.log(user);
		}
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
								{validationErrors?.firstName && (
									<p className='text-danger'>{validationErrors.firstName}</p>
								)}
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
								{validationErrors?.lastName && (
									<p className='text-danger'>{validationErrors.lastName}</p>
								)}
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
								{validationErrors?.email && (
									<p className='text-danger'>{validationErrors.email}</p>
								)}
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
								{validationErrors?.phoneNumber && (
									<p className='text-danger'>{validationErrors.phoneNumber}</p>
								)}
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Company </label>}>
								<Select
									onChange={(value: string | number) =>
										handleChange('companyId', value)
									}
									size='large'
									className='adminInput'>
									<Option value='1'>DGS Integrated Services</Option>
								</Select>
								{validationErrors?.companyId && (
									<p className='text-danger'>{validationErrors.companyId}</p>
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Role</label>}>
								<Select
									onChange={(value: number) => handleChange('roleId', value)}
									size='large'
									className='adminInput'>
									<Option value='Admin'>Admin</Option>
									<Option value='Checker'>Checker</Option>
									<Option value='Staff'>Staff</Option>
									<Option value='Authorizer'>Authorizer</Option>
									<Option value='VendorAdmin'>VendorAdmin</Option>
									<Option value='Vendor'>Vendor</Option>
								</Select>
								{validationErrors?.roleId && (
									<p className='text-danger'>{validationErrors.roleId}</p>
								)}
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
								{validationErrors?.password && (
									<small className='text-danger'>
										{validationErrors.password}
									</small>
								)}
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
								{validationErrors?.confirmPassword && (
									<p className='text-danger'>
										{validationErrors.confirmPassword}
									</p>
								)}
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
