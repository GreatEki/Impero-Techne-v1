import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Typography, Form, Row, Col } from 'antd';
import * as IoIcon from 'react-icons/io5';

const { Title, Text } = Typography;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const Login = () => {
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
						<Form.Item label={<strong>Email</strong>}>
							<Input
								placeholder='yourmail@dgslimited.com'
								size='large'
								style={{ height: '50px' }}
								className='round'
							/>
						</Form.Item>

						<Form.Item label={<strong>Password</strong>}>
							<Input
								type='password'
								placeholder='Password'
								size='large'
								style={{ height: '50px' }}
								suffix={<IoIcon.IoEyeSharp />}
								className='round'
							/>
						</Form.Item>

						<Form.Item>
							<button className='btn-xlg'>Login</button>
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
