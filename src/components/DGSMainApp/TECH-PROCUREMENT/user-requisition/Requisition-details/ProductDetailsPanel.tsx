import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Input, Select, Form, Button, message } from 'antd';
import { ProductStorageItemI } from 'appRedux/types/userRequisitionTypes';
import { v4 as uuidv4 } from 'uuid';
import { addItemToProductStorageItems } from 'appRedux/actions/userRequisitionActions';
import { numberWithCommas } from 'utils/numberWithCommas';
const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const ProductDetailsPanel = () => {
	const dispatch = useDispatch();
	const [formState, setFormState] = useState<ProductStorageItemI>({
		itemId: '',
		description: '',
		quantity: 0,
		unit: '',
		unit_cost: 0,
		estimated_cost: 0,
	});

	const [productStorageItems, setProductStorageItems] = useState<
		ProductStorageItemI[]
	>([]);

	useEffect(() => {
		dispatch(addItemToProductStorageItems(productStorageItems));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productStorageItems]);

	const calcEstimatedCost = (formState: ProductStorageItemI) => {
		const total = Number(formState.unit_cost) * Number(formState.quantity);
		setFormState({ ...formState, estimated_cost: total });
		return total;
	};

	const handleFormChange = (key: string, value: string | number) => {
		setFormState({ ...formState, [key]: value });
	};

	const handleSubmit = (formState: ProductStorageItemI) => {
		// Generate Id
		const id = uuidv4();
		// update the item with the id
		const updatedItem = Object.assign({}, formState, { itemId: id });
		setProductStorageItems((productStorageItems) => [
			updatedItem,
			...productStorageItems,
		]);
		message.success('Product Added Successfully');
		setFormState({
			itemId: '',
			description: '',
			quantity: 0,
			unit: '',
			unit_cost: 0,
			estimated_cost: 0,
		});
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
										value={formState.description}
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
										value={formState.quantity}
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
										value={formState.unit}
										onChange={(value: string) =>
											handleFormChange('unit', value)
										}
										size='large'
										style={{ width: '100%' }}>
										<Option value='unit1'>unit 1</Option>
										<Option value='watts'>watts</Option>
										<Option value='jolues'>joules</Option>
										<Option value='mhhz'>MHz</Option>
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
										value={formState.unit_cost}
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
										value={numberWithCommas(formState.estimated_cost)}
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
