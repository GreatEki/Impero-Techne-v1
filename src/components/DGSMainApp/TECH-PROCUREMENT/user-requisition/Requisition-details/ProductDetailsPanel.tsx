import React, { useState } from 'react';
import { Row, Col, Input, Select, Form, Button } from 'antd';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface FormStateI {
	description: string;
	quantity: number;
	unit: string;
	unit_cost: number;
	estimated_cost: number;
}

const ProductDetailsPanel = () => {
	const [formState, setFormState] = useState<FormStateI>({
		description: '',
		quantity: 0,
		unit: '',
		unit_cost: 0,
		estimated_cost: 0,
	});

	const calcEstimatedCost = (formState: FormStateI) => {
		const total = Number(formState.unit_cost) * Number(formState.quantity);
		setFormState({ ...formState, estimated_cost: total });
		return total;
	};

	const handleFormChange = (key: string, value: string | number) => {
		setFormState({ ...formState, [key]: value });
	};

	const handleSubmit = (formState: FormStateI) => {
		console.log(formState);
	};
	return (
		<>
			<Row>
				<Col span={20} offset={2}>
					{/* Form  */}
					<Form {...formLayout}>
						<Row className='my-3'>
							<Col span={24}>
								<Form.Item
									label={
										<strong>
											Description <span className='text-danger'>*</span>
										</strong>
									}>
									<Input
										onChange={(e) =>
											handleFormChange('description', e.currentTarget.value)
										}
										size='large'
										className='round'
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong>
											Quantity <span className='text-danger'>*</span>
										</strong>
									}>
									<Input
										onChange={(e) =>
											handleFormChange('quantity', e.currentTarget.value)
										}
										onBlur={() => calcEstimatedCost(formState)}
										size='large'
										className='round'
									/>
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong className='p-2'>
											Unit <span className='text-danger'>*</span>
										</strong>
									}>
									<Select
										onChange={(value: string) =>
											handleFormChange('unit', value)
										}
										size='large'
										style={{ width: '100%' }}>
										<Option value='kg'>Kilogram</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong className='p-2'>
											Unit Cost <span className='text-danger'>*</span>
										</strong>
									}>
									<Input
										onChange={(e) =>
											handleFormChange('unit_cost', e.currentTarget.value)
										}
										onBlur={() => calcEstimatedCost(formState)}
										size='large'
										className='round'
									/>
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong>
											Estimated Cost <span className='text-danger'>*</span>
										</strong>
									}>
									<Input
										size='large'
										value={formState.estimated_cost}
										className='round'
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item>
									<Button
										onClick={() => handleSubmit(formState)}
										className='btn-xlg text-white'>
										{' '}
										Add Item{' '}
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default ProductDetailsPanel;
