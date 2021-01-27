import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Typography, Form, Row, Col } from 'antd';
import * as IoIcon from 'react-icons/io5';

const { Title, Text } = Typography;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface StateI {
	email: string;
	password: string;
}

const Login = () => {
	const [state, setState] = useState<StateI>({
		email: '',
		password: '',
	});

	function handleFormChange(field: string, value: string) {
		setState({ ...state, [field]: value });
	}

	function onSubmit(formState: StateI) {
		console.log(formState);
	}

	return (
		<div className='loginWrapper'>
			<Card className='card-modal'>
				<div className='my-md-4 my-2'>
					<img src='/icons/dgs-logo.svg' alt='prop' />
				</div>

				<div className='my-md-4 my-2'>
					<Title level={2}>Login To Your Account</Title>
					<strong className='muted-font'>
						Welcome, Enter your details to login{' '}
					</strong>
				</div>

				<section>
					<Form {...formLayout}>
						<Form.Item name='email' label={<strong>Email</strong>}>
							<Input
								type='email'
								placeholder='yourmail@dgslimited.com'
								size='large'
								style={{ height: '50px' }}
								className='round'
								onChange={(e) =>
									handleFormChange('email', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item name='password' label={<strong>Password</strong>}>
							<Input
								type='password'
								placeholder='Password'
								size='large'
								style={{ height: '50px' }}
								suffix={<IoIcon.IoEyeSharp />}
								className='round'
								onChange={(e) =>
									handleFormChange('password', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item>
							<button onClick={() => onSubmit(state)} className='btn-xlg'>
								Login
							</button>
						</Form.Item>

						<section className='flex-end'>
							<Link to='#' className='site-primary'>
								{' '}
								Forgot Password{' '}
							</Link>
						</section>
					</Form>
				</section>
			</Card>
		</div>
	);
};

export default Login;
