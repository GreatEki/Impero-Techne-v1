import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select, Row, Col, Empty } from 'antd';
import {
	getAllStates,
	getAllCountry,
} from 'appRedux/actions/MiscellaneousActions';
import { RootStore } from 'appRedux/Store';
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
	const dispatch = useDispatch();
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

	const [mtoStorageItems, setMtoStorageItems] = useState<MTOITEMSI[]>([]);

	useEffect(() => {
		(async () => {
			await dispatch(getAllCountry());
			await dispatch(getAllStates());
		})();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// This useEffect updates local storage when mtoStorage is updated
	useEffect(() => {
		localStorage.setItem('mtoStorageItems', JSON.stringify(mtoStorageItems));
		const mtoStorageQty = mtoStorageItems.length;
		localStorage.setItem('mtoStorageQty', JSON.stringify(mtoStorageQty));

		// eslint-disable-nextline react-hooks/exhaustive-deps
	}, [mtoStorageItems]);

	const { states, countries } = useSelector(
		(state: RootStore) => state.miscellaneous
	);

	const handleFormChange = (key: string, value: string | number) => {
		setMtoItem({ ...mtoItem, [key]: value });
	};

	const handleSubmitItem = (newItem: MTOITEMSI) => {
		setMtoStorageItems((mtoStorageItems) => [newItem, ...mtoStorageItems]);
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

						<Row
							gutter={[{ xs: 10, sm: 10, md: 50, lg: 50 }, 10]}
							justify='space-between'>
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
										showSearch={true}
										optionFilterProp='children'
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
						<Row
							gutter={[{ xs: 10, sm: 10, md: 50, lg: 50 }, 10]}
							justify='space-between'>
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
						<Row
							gutter={[{ xs: 10, sm: 10, md: 50, lg: 50 }, 10]}
							justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='unit_price'
									label={<strong>Unit Price</strong>}
									rules={[{ required: true }]}>
									<Select
										showSearch={true}
										optionFilterProp='children'
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
						<Row
							gutter={[{ xs: 10, sm: 10, md: 50, lg: 50 }, 10]}
							justify='space-between'>
							<Col span={12}>
								<Form.Item
									name='sellers-country'
									label={<strong>Seller's Country</strong>}
									rules={[{ required: true }]}>
									<Select
										showSearch={true}
										optionFilterProp='children'
										onChange={(value: string | number) =>
											handleFormChange('sellers_country', value)
										}
										size='large'
										placeholder=''>
										{countries ? (
											countries.map((country) => (
												<Fragment key={country.countryId}>
													<Option value={country.countryId}>
														{country.countryName}
													</Option>
												</Fragment>
											))
										) : (
											<>
												<Empty />
											</>
										)}
									</Select>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									name='sellers_state'
									label={<strong>Seller's State</strong>}
									rules={[{ required: true }]}>
									<Select
										showSearch={true}
										optionFilterProp='children'
										onChange={(value: string | number) =>
											handleFormChange('sellers_state', value)
										}
										size='large'
										placeholder=''>
										{states ? (
											states.map((state) => (
												<Fragment key={state.stateId}>
													<Option value={state.stateId}>
														{state.stateName}
													</Option>
												</Fragment>
											))
										) : (
											<>
												<Empty />
											</>
										)}
									</Select>
								</Form.Item>
							</Col>
						</Row>

						{/*  */}
						<Row
							gutter={[{ xs: 10, sm: 10, md: 50, lg: 50 }, 10]}
							justify='space-between'>
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
									onClick={() => handleSubmitItem(mtoItem)}
									style={{ marginTop: '1em', width: '100%' }}
									className='btn-xlg'>
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
