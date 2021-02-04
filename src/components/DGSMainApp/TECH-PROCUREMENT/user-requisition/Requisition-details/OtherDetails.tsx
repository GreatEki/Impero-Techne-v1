import React, { useState } from 'react';
import {
	Input,
	Row,
	Col,
	Select,
	Button,
	Checkbox,
	Form,
	DatePicker,
} from 'antd';
import AddMTOInfo from './AddMTOInfo';
import ConfirmSubmissionModal from './ConfimSubmission';
import { OtherDetailsI } from 'appRedux/types/userRequisitionTypes';

const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const OtherDetails: React.FC = () => {
	const [sparedReq, setSparesReq] = useState(false);
	const [afterSales, setAfterSaales] = useState(false);
	const [formState, setFormState] = useState<OtherDetailsI>({
		detailed_spec: '',
		ref_code: '',
		terms_and_cond: '',
		sellers_country: '',
		sellers_state: '',
		sellers_city: '',
		delivery_address: '',
		date_req_onsite: '',
		other_info: '',
		del_special_instruction: '',
		other_special_instructions: '',
		spares_required: false,
		after_sales: false,
	});

	const [ConfirmSubVisible, setConfirmSubVisible] = useState(false);

	const showConfirmSubModal = () => {
		setConfirmSubVisible(true);
	};

	const handleChange = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	const handleDate = (date: any, dateString: string) => {
		setFormState({ ...formState, date_req_onsite: dateString });
	};

	const onFinish = () => {
		let otherDetails = {
			...formState,
			spares_required: sparedReq,
			after_sales: afterSales,
		};

		const updatedDetails = Object.assign({}, formState, otherDetails);
		// Updating our formstate because we're passing it into the ConfirmSubmission Component
		setFormState(updatedDetails);
		showConfirmSubModal();
	};

	return (
		<div>
			<Row gutter={50}>
				<Col span={20} offset={2}>
					<Form {...formLayout}>
						<Form.Item
							label={
								<label>
									<strong>Detailed Specifications</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleChange('detailed_spec', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Reference Code Standards</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleChange('ref_code', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Terms and Conditions</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleChange('terms_and_cond', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<strong> Delivery Information </strong>
						<Row gutter={50}>
							<Col span={6}>
								<Form.Item
									label={
										<label>
											<strong>Sellers Country </strong>
										</label>
									}>
									<Select
										size='large'
										onChange={(value: string) =>
											handleChange('sellers_country', value)
										}>
										<Option value='Nigeria'> Nigeria x</Option>
									</Select>
								</Form.Item>
							</Col>

							<Col span={6}>
								<Form.Item
									label={
										<label>
											<strong>Sellers State </strong>
										</label>
									}>
									<Select
										size='large'
										onChange={(value: string) =>
											handleChange('sellers_state', value)
										}>
										<Option value='Ikeja'> Ikeja x</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Row gutter={50}>
							<Col span={6}>
								<Form.Item
									label={
										<label>
											<strong>Sellers City </strong>
										</label>
									}>
									<Select
										size='large'
										onChange={(value: string) =>
											handleChange('sellers_city', value)
										}>
										<Option value='Alausa'> Alausa </Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							label={
								<label>
									<strong>Delivery Address </strong>
								</label>
							}>
							<Input
								size='large'
								onChange={(e) =>
									handleChange('delivery_address', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Special Instructions</strong>
								</label>
							}>
							<Input
								size='large'
								placeholder='e.g Packaging, Storage'
								onChange={(e) =>
									handleChange('del_special_instruction', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Date Required on Site</strong>
								</label>
							}>
							<Row gutter={50}>
								<Col span={10}>
									<DatePicker
										onChange={handleDate}
										style={{ width: '100%' }}
										placeholder='Select Date'
									/>
								</Col>
							</Row>
						</Form.Item>

						<p className='muted-font'> Other Information </p>

						<Form.Item>
							<small>
								{' '}
								<span className='text-danger'> Tick as Appropriate </span>{' '}
							</small>
							<br />
							<br />
							<Checkbox onChange={(e) => setSparesReq(!sparedReq)}>
								{' '}
								Spares Required{' '}
							</Checkbox>
							<Checkbox onChange={(e) => setAfterSaales(!afterSales)}>
								{' '}
								After Sales Required{' '}
							</Checkbox>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Special Instructions</strong>
								</label>
							}>
							<Input
								onChange={(e) =>
									handleChange(
										'other_special_instructions',
										e.currentTarget.value
									)
								}
								size='large'
								placeholder='e.g Packaging, Storage'
							/>
						</Form.Item>

						{/* ==== MTO Information ===== */}
						<AddMTOInfo />
						{/* ==== MTO Information ===== */}

						<Row>
							<Col span={5}>
								<Form.Item>
									<Button onClick={onFinish} className='btn-xlg'>
										Submit
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>

			<ConfirmSubmissionModal
				otherDetails={formState}
				visible={ConfirmSubVisible}
				setVisible={setConfirmSubVisible}
			/>
		</div>
	);
};

export default OtherDetails;
