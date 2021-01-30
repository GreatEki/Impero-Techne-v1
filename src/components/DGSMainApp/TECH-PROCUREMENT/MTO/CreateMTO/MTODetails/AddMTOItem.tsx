import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select, Row, Col, Empty, message } from 'antd';
import {
	getAllStates,
	getAllCountry,
	getAllCities,
} from 'appRedux/actions/MiscellaneousActions';
import { addMtoStorageItem } from 'appRedux/actions/mtoActions';
import { RootStore } from 'appRedux/Store';
import { numberWithCommas } from 'utils/numberWithCommas';
import { MtoStorageItemI } from 'appRedux/types/mtoTypes';

const { Option } = Select;
const { TextArea } = Input;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const AddMTOItem = () => {
	const dispatch = useDispatch();
	const [mtoItem, setMtoItem] = useState<MtoStorageItemI>({
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

	const [mtoStorageItems, setMtoStorageItems] = useState<MtoStorageItemI[]>([]);

	useEffect(() => {
		(async () => {
			await dispatch(getAllCountry());
			await dispatch(getAllStates());
			await dispatch(getAllCities());
		})();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// This useEffect updates our redux mtoStorage
	useEffect(() => {
		dispatch(addMtoStorageItem(mtoStorageItems));

		// eslint-disable-nextline react-hooks/exhaustive-deps
	}, [mtoStorageItems]);

	const { states, countries, cities } = useSelector(
		(state: RootStore) => state.miscellaneous
	);

	const handleFormChange = (key: string, value: string | number) => {
		setMtoItem({ ...mtoItem, [key]: value });
	};

	const handleSubmitItem = (newItem: MtoStorageItemI) => {
		setMtoStorageItems((mtoStorageItems) => [newItem, ...mtoStorageItems]);
		message.success('MTO Item Added Successfully');
		setMtoItem({
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
	};

	const calcTotalPrice = (item: MtoStorageItemI) => {
		const totalPrice = item.unit_price * item.qty_required_to_buy;
		const updatedItem = Object.assign({}, mtoItem, { total_price: totalPrice });
		setMtoItem(updatedItem);
		return totalPrice;
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
										onBlur={() => calcTotalPrice(mtoItem)}
										size='large'
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
									<Input
										prefix={'$'}
										size='large'
										onBlur={() => calcTotalPrice(mtoItem)}
										onChange={(e) =>
											handleFormChange(
												'unit_price',
												parseInt(e.currentTarget.value)
											)
										}
									/>
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									label={<strong>Total Price</strong>}
									rules={[{ required: true }]}>
									<Input
										size='large'
										onChange={(e) =>
											handleFormChange('total_price', e.currentTarget.value)
										}
										value={`$ ${numberWithCommas(mtoItem.total_price)}`}
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
										size='large'
										showSearch={true}
										optionFilterProp='children'
										onChange={(value: string | number) =>
											handleFormChange('sellers_country', value)
										}>
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
										onChange={(value: string | number) =>
											handleFormChange('sellers_city', value)
										}>
										{cities ? (
											cities.map((city) => (
												<Fragment key={city.cityId}>
													<Option value={city.cityId}>{city.cityName}</Option>
												</Fragment>
											))
										) : (
											<Fragment>
												<Empty />
											</Fragment>
										)}
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
