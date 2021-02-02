import React, { useState } from 'react';
import { Input, Select, Radio, DatePicker, Form, Table, Row, Col } from 'antd';
import * as FaIcons from 'react-icons/fa';
import { addServiceDetail } from 'appRedux/actions/userRequisitionActions';
import { useDispatch } from 'react-redux';

const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

interface ServiceDetailsI {
	intro_and_desc: string;
	scope_of_works: string;
	reference_code_and_stds: string;
	detailed_desc_of_work_and_specs: string;
	technical_eval_req: string;
	reference_drawings: string;
	work_schedule: string;
	commercial: string;
	terms_and_conditions: string;
	payment_terms: string;
	renumeration: string;
	validity_period: string;
	delivery_address: string;
	special_instructions: string;
	date_required_on_site: string | Date;
}

const ServiceDetailFormPanel = () => {
	const dispatch = useDispatch();
	const [formState, setFormState] = useState<ServiceDetailsI>({
		intro_and_desc: '',
		scope_of_works: '',
		reference_code_and_stds: '',
		detailed_desc_of_work_and_specs: '',
		technical_eval_req: '',
		reference_drawings: '',
		work_schedule: '',
		commercial: '',
		terms_and_conditions: '',
		payment_terms: '',
		renumeration: '',
		validity_period: '',
		delivery_address: '',
		special_instructions: '',
		date_required_on_site: '',
	});
	const [validityPeriod, setValidityPeriod] = useState('');

	const dataSource = [
		{
			key: 1,
			name: 'Cable Gland & Cable Lug',
			serial_no: 'LKJY5451278744',
			items: 15,
			total_cost: 2_234_557,
		},
		{
			key: 2,
			name: 'Cable Gland & Cable Lug',
			serial_no: 'LKJY5451278744',
			items: 15,
			total_cost: 2_234_557,
		},
	];

	const handleFormChange = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	const handleDate = (date: any, dateString: string) => {
		setFormState({ ...formState, validity_period: dateString });
	};

	const onSubmit = (formState: ServiceDetailsI) => {
		let formdata = new FormData();

		for (const [key, value] of Object.entries(formState)) {
			formdata.append(key, value);
		}
		dispatch(addServiceDetail(formState));
	};

	return (
		<div>
			<Row>
				<Col span={20} offset={2}>
					<Form {...formLayout}>
						<Form.Item
							label={
								<label>
									<strong>
										Introduction & Brief Description of Proposed Development
									</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleFormChange('intro_and_desc', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Scope of Works</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleFormChange('scope_of_works', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Reference Codes & Standards</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleFormChange(
										'reference_code_and_stds',
										e.currentTarget.value
									)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>
										Detailed Description of Works and Specification
									</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleFormChange(
										'detailed_desc_of_work_and_specs',
										e.currentTarget.value
									)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Technical Evaluation Requirement</strong>
								</label>
							}>
							<TextArea
								rows={4}
								onChange={(e) =>
									handleFormChange('technical_eval_req', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Reference Drawings</strong>
								</label>
							}>
							<Input
								type='file'
								onChange={(e: any) =>
									handleFormChange('reference_drawings', e.target.files[0].name)
								}
								prefix={<FaIcons.FaPaperclip />}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Work Schedule</strong>
								</label>
							}>
							<Input
								onChange={(e: any) =>
									handleFormChange('work_schedule', e.target.files[0].name)
								}
								type='file'
								placeholder='Attach a file'
								prefix={<FaIcons.FaPaperclip />}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Commercial</strong>
								</label>
							}>
							<Input
								onChange={(e: any) =>
									handleFormChange('commercial', e.target.files[0].name)
								}
								type='file'
								placeholder='Attach a file'
								prefix={<FaIcons.FaPaperclip />}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Terms and Conditions</strong>
								</label>
							}>
							<Input
								onChange={(e: any) =>
									handleFormChange(
										'terms_and_conditions',
										e.target.files[0].name
									)
								}
								type='file'
								placeholder='Attach a file'
								prefix={<FaIcons.FaPaperclip />}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Payment Terms </strong>
								</label>
							}>
							<Input
								size='large'
								onChange={(e) =>
									handleFormChange('payment_terms', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Renumeration</strong>
								</label>
							}>
							<Input
								size='large'
								onChange={(e) =>
									handleFormChange('renumeration', e.currentTarget.value)
								}
							/>
						</Form.Item>

						<Row>
							<Col xs={12} sm={12} md={8} lg={8}>
								<Form.Item
									label={
										<label>
											<strong>Validity Period</strong>
										</label>
									}>
									<DatePicker onChange={handleDate} />
								</Form.Item>
							</Col>
						</Row>

						<strong className='muted-font'> Delivery Information</strong>

						<Form.Item
							label={
								<label>
									<strong>Delivery Address</strong>
								</label>
							}>
							<Input
								size='large'
								onChange={(e) =>
									handleFormChange('delivery_address', e.currentTarget.value)
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
								onChange={(e) =>
									handleFormChange(
										'special_instructions',
										e.currentTarget.value
									)
								}
							/>
						</Form.Item>

						<Row>
							<Col xs={12} sm={12} md={8} lg={8}>
								<Form.Item
									label={
										<label>
											<strong>Date Required on Site </strong>
										</label>
									}>
									<DatePicker />
								</Form.Item>
							</Col>
						</Row>

						<strong className='muted-font'> Add MTO Information</strong>

						<Form.Item
							label={
								<label>
									<strong>Discipline</strong>
								</label>
							}>
							<Radio.Group size='large'>
								<Radio value='Electrical MTO' key='electrical_mto'>
									<strong>Electrical MTO</strong>
								</Radio>
								<Radio value='Piping MTO' key='piping_mto'>
									<strong>Piping MTO</strong>
								</Radio>
								<Radio value='Civil MTO' key='civil_mto'>
									<strong>Civil MTO</strong>
								</Radio>
								<Radio value='Instrumentation MTO' key='instrumentation_mto'>
									<strong>Instrumentation MTO </strong>
								</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Sub Discipline</strong>
								</label>
							}>
							<Select
								showSearch={true}
								optionFilterProp='children'
								size='large'
								placeholder='Search for Project Name'>
								<Option value='sub-discipline'>sub discipline 1</Option>
							</Select>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Form Name</strong>
								</label>
							}>
							<Select
								showSearch={true}
								optionFilterProp='children'
								size='large'
								placeholder='Search for Project Name'>
								<Option value='gas plant'>Gas Plant Project</Option>
							</Select>
						</Form.Item>

						<Form.Item>
							<button className='site-btn-sm text-white round'>Add</button>
						</Form.Item>
					</Form>

					<section className='mt-5'>
						<Table dataSource={dataSource} size='small' bordered>
							<Table.Column
								dataIndex='name'
								title={<small>Name</small>}
								render={(text, record: { name: string }) => (
									<small>
										<b>{record.name}</b>
									</small>
								)}
							/>
							<Table.Column
								dataIndex='serial_no'
								title={<small>Serial No</small>}
								render={(text, record: { serial_no: string }) => (
									<small>
										<b>{record.serial_no}</b>
									</small>
								)}
							/>
							<Table.Column
								dataIndex='item'
								title={<small>Item</small>}
								render={(text, record: { items: string }) => (
									<small>
										<b>{record.items}</b>
									</small>
								)}
							/>
							<Table.Column
								dataIndex='total_cost'
								title={<small>Total Cost</small>}
								render={(text, record: { total_cost: number }) => (
									<small>
										<b>{record.total_cost}</b>
									</small>
								)}
							/>
						</Table>
					</section>

					{/* === Submit === */}
					<Row>
						<Col span={6}>
							<button onClick={() => onSubmit(formState)} className='btn-xlg'>
								Submit
							</button>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ServiceDetailFormPanel;
