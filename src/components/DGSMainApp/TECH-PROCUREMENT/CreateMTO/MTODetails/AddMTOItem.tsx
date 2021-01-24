import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const AddMTOItem = () => {
	return (
		<div>
			<Row>
				<Col span={18} offset={3}>
					<Form {...formLayout}>
						<p>
							{' '}
							<span className='text-danger'>*</span> Added MTO Items Can't be
							deleted. All fields are required{' '}
						</p>

						<Row gutter={100}>
							<Col span={24}>
								<Form.Item
									name='description'
									label={<strong>Item Description</strong>}
									rules={[{ required: true }]}>
									<Input size='large' className='rounded' />
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='volatge'
									label={<strong>Volatge (Volts)</strong>}
									rules={[{ required: true }]}>
									<Input size='large' className='rounded' />
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='unit'
									label={<strong>Unit </strong>}
									rules={[{ required: true }]}>
									<Select size='large'>
										<Option value='unit1'>unit 1</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>
						{/*  */}
						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='qty_required'
									label={<strong>Quantity of Item Required </strong>}
									rules={[{ required: true }]}>
									<Input size='large' className='rounded' />
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='unit'
									label={<strong>Quantity of Item Rquired to Buy </strong>}
									rules={[{ required: true }]}>
									<Input size='large' className='rounded' />
								</Form.Item>
							</Col>
						</Row>

						{/*  */}

						{/*  */}
						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='sellers-country'
									label={<strong>Seller's Country</strong>}
									rules={[{ required: true }]}>
									<Select size='large' placeholder='$'>
										<Option value='unit1'>America</Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='sellers_state'
									label={<strong>Seller's State</strong>}
									rules={[{ required: true }]}>
									<Select size='large' placeholder='$'>
										<Option value='unit1'>New York </Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						{/*  */}
						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='unit_price'
									label={<strong>Unit Price</strong>}
									rules={[{ required: true }]}>
									<Select size='large' placeholder='$'>
										<Option value='unit1'>unit 1</Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='total_price'
									label={<strong>Total Price</strong>}
									rules={[{ required: true }]}>
									<Input placeholder='$ 0' />
								</Form.Item>
							</Col>
						</Row>

						{/*  */}
						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='sellers_city'
									label={<strong>Seller's City</strong>}
									rules={[{ required: true }]}>
									<Select size='large' placeholder='$'>
										<Option value='unit1'>Brooklyn</Option>
									</Select>
								</Form.Item>

								<button
									style={{ marginTop: '1em', width: '100%' }}
									className='btn-xlg site-blue text-white'>
									{' '}
									Add Item
								</button>
							</Col>

							<Col span={12}>
								<Form.Item
									name='delivery_address'
									label={<strong>Delivery Address</strong>}
									rules={[{ required: true }]}>
									<TextArea rows={7} />
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default AddMTOItem;
