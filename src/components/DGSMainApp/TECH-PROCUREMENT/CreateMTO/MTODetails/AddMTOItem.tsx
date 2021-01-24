import React, { useState } from 'react';
import { Form, Input, Select, Row, Col } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface MTOITEMSI {
	description: string;
	voltage: string | number;
	unit: string | number;
	qty_required: number;
	qty_required_to_buy: number;
	sellers_country: string | number;
	sellers_state: string | number;
	unit_price: number;
	total_price: number;
	sellers_city: string | number;
	delivery_address: string | number;
}

const AddMTOItem = () => {
	const [mtoItem, setMtoItem] = useState<MTOITEMSI>({
		description: '',
		voltage: '',
		unit: '',
		qty_required: 0,
		qty_required_to_buy: 0,
		sellers_country: '',
		sellers_state: '',
		unit_price: 0,
		total_price: 0,
		sellers_city: '',
		delivery_address: 0,
	});

	const handleFormChange = (key: string, value: string | number) => {
		setMtoItem({ ...mtoItem, [key]: value });
	};

	const handleSubmitItem = () => {
		console.log(mtoItem);
	};

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
									<Input
										onChange={(e) =>
											handleFormChange('description', e.currentTarget.value)
										}
										size='large'
										className='rounded'
									/>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={100} justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='volatge'
									label={<strong>Volatge (Volts)</strong>}
									rules={[{ required: true }]}>
									<Input
										onChange={(e) =>
											handleFormChange('voltage', e.currentTarget.value)
										}
										size='large'
										className='rounded'
									/>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='unit'
									label={<strong>Unit </strong>}
									rules={[{ required: true }]}>
									<Select
										onChange={(value: string | number) =>
											handleFormChange('unit', value)
										}
										size='large'>
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
									<Input
										onChange={(e) =>
											handleFormChange('qty_required', e.currentTarget.value)
										}
										size='large'
										className='rounded'
									/>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='qty_required_to_buy'
									label={<strong>Quantity of Item Rquired to Buy </strong>}
									rules={[{ required: true }]}>
									<Input
										onChange={(e) =>
											handleFormChange(
												'qty_required_to_buy',
												e.currentTarget.value
											)
										}
										size='large'
										className='rounded'
									/>
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
									<Select
										onChange={(value: string | number) =>
											handleFormChange('sellers_country', value)
										}
										size='large'
										placeholder='$'>
										<Option value='unit1'>America</Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='sellers_state'
									label={<strong>Seller's State</strong>}
									rules={[{ required: true }]}>
									<Select
										onChange={(value: string | number) =>
											handleFormChange('sellers_state', value)
										}
										size='large'
										placeholder='$'>
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
									<Select
										onChange={(value: string | number) =>
											handleFormChange('unit_price', value)
										}
										size='large'
										placeholder='$'>
										<Option value='unit1'>unit 1</Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='total_price'
									label={<strong>Total Price</strong>}
									rules={[{ required: true }]}>
									<Input
										onChange={(e) =>
											handleFormChange('total_price', e.currentTarget.value)
										}
										placeholder='$ 0'
									/>
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
									<Select
										size='large'
										placeholder='$'
										onChange={(value: string | number) =>
											handleFormChange('sellers_city', value)
										}>
										<Option value='unit1'>Brooklyn</Option>
									</Select>
								</Form.Item>

								<button
									onClick={handleSubmitItem}
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
									<TextArea
										rows={7}
										onChange={(e) =>
											handleFormChange(
												'delivery_address',
												e.currentTarget.value
											)
										}
									/>
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
