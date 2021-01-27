import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Input, Typography, Form, Button } from 'antd';
import * as IoIcon from 'react-icons/io5';
import { signIn } from 'appRedux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from 'appRedux/Store';
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

const Login: React.FC = () => {
	const history = useHistory();
	const [state, setState] = useState<StateI>({
		email: '',
		password: '',
	});

	const { loading, error } = useSelector((state: RootStore) => state.user);

	const dispatch = useDispatch();

	function handleFormChange(field: string, value: string) {
		setState({ ...state, [field]: value });
	}

	async function onSubmit(formState: StateI) {
		await dispatch(signIn(formState));
		if (error === null) {
			// if he have no errors. We redirect to the app
			console.log(error);
			return history.push('/app');
		} else {
			console.log(error);
			return error;
		}
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
						{error && <p className='text-danger'> {error} </p>}
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
							<Button
								loading={loading}
								onClick={() => onSubmit(state)}
								className='btn-xlg'>
								Login
							</Button>
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
