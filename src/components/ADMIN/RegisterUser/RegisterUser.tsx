import React, { useState, useEffect, Fragment } from 'react';
import {
	Card,
	Row,
	Col,
	Divider,
	Input,
	Form,
	Select,
	Button,
	Empty,
} from 'antd';
import passwordValidator from 'password-validator';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllCompanies,
	getAllRoles,
} from 'appRedux/actions/MiscellaneousActions';
import { RootStore } from 'appRedux/Store';
import { RegUserI } from 'appRedux/types/userTypes';
import { registerUser } from 'appRedux/actions/userActions';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const RegisterUser = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState<RegUserI>({
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
	const [validationErrors, setValidationErrors] = useState<RegUserI | null>({
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

	const { companies, roles } = useSelector(
		(state: RootStore) => state.miscellaneous
	);

	const { loading, error, message } = useSelector(
		(state: RootStore) => state.user
	);

	useEffect(() => {
		(async () => {
			await dispatch(getAllCompanies());
			dispatch(getAllRoles());
		})();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const checkErrors = (user: RegUserI) => {
		let errors: RegUserI | null = {
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

	const handleSubmit = (user: RegUserI) => {
		// Check for Errors
		const valErrors = checkErrors(user);
		if (valErrors) {
			setValidationErrors(valErrors);
		} else {
			setValidationErrors(valErrors);
			dispatch(registerUser(user));
			// console.log(user);
			setUser({
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				password: '',
				confirmPassword: '',
				staffNumber: '',
				companyId: '',
				roleId: 0,
			});
		}
	};

	return (
		<div>
			<Card>
				<section className='d-flex justify-content-center'>
					<strong> User Registration </strong>
				</section>

				{message && <strong className='text-success'>{message}</strong>}
				<Divider />

				<Form {...formLayout}>
					<Row gutter={50}>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>FirstName</label>}>
								<Input
									onChange={(e) =>
										handleChange('firstName', e.currentTarget.value)
									}
									value={user.firstName}
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
									value={user.lastName}
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
									value={user.email}
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
									value={user.phoneNumber}
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
									value={user.companyId}
									showSearch={true}
									optionFilterProp='children'
									onChange={(value: string | number) =>
										handleChange('companyId', value)
									}
									size='large'
									className='adminInput'>
									{companies ? (
										companies.map((company) => (
											<Option value={company.companyId} key={company.companyId}>
												{company.companyName}
											</Option>
										))
									) : (
										<Fragment>
											<Empty />
										</Fragment>
									)}
								</Select>
								{validationErrors?.companyId && (
									<p className='text-danger'>{validationErrors.companyId}</p>
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label={<label className='fw-bold'>Role</label>}>
								<Select
									// value={user.roleId}
									showSearch={true}
									optionFilterProp='children'
									onChange={(value: number) => handleChange('roleId', value)}
									size='large'
									className='adminInput'>
									{roles ? (
										roles.map((role) => (
											<Option value={role.id} key={role.id}>
												{role.name}
											</Option>
										))
									) : (
										<Fragment>
											<Empty />
										</Fragment>
									)}
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
									value={user.password}
									onChange={(e) =>
										handleChange('password', e.currentTarget.value)
									}
									type='password'
									className='adminInput'
									size='large'
									placeholder='Enter Password'
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
									value={user.confirmPassword}
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
									value={user.staffNumber}
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
								size='large'
								loading={loading}
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
						<Col span={5}>
							{error && <p className='text-danger text-break'> {error} </p>}
						</Col>
					</Row>
				</Form>
			</Card>
		</div>
	);
};

export default RegisterUser;
