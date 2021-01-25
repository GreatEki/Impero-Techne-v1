import React from 'react';
import { Row, Col, Input, Select, Form } from 'antd';

const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const ProductDetailsPanel = () => {
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
									<Input size='large' className='round' />
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
									<Input size='large' className='round' />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong className='p-2'>
											Unit <span className='text-danger'>*</span>
										</strong>
									}>
									<Select size='large' style={{ width: '100%' }}>
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
									<Input size='large' className='round' />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									label={
										<strong>
											Estimated Cost <span className='text-danger'>*</span>
										</strong>
									}>
									<Input size='large' className='round' />
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item>
									<button className='btn-xlg text-white'> Add Item </button>
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
