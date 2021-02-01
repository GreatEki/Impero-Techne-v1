import React from 'react';
import { Input, Row, Col, Select, Button, Checkbox, Form, Radio } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
	labelCol: {
		span: 24,
	},
};

const plainOptions = ['Spares Required', 'After Sales required'];

const OtherDetails: React.FC = () => {
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
							<TextArea rows={4} />
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Reference Code Standards</strong>
								</label>
							}>
							<TextArea rows={4} />
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Terms and Conditions</strong>
								</label>
							}>
							<TextArea rows={4} />
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
									<Select size='large'>
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
									<Select size='large'>
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
									<Select size='large'>
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
							<Input size='large' />
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Special Instructions</strong>
								</label>
							}>
							<Input size='large' placeholder='e.g Packaging, Storage' />
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Date Required on Site</strong>
								</label>
							}>
							<Row gutter={50}>
								<Col span={3}>
									<Select size='large' defaultValue='1'>
										<Option value='1'>1</Option>
									</Select>
								</Col>
								<Col span={5}>
									<Select size='large' defaultValue='January'>
										<Option value='January'>January</Option>
									</Select>
								</Col>
								<Col span={3}>
									<Select size='large' defaultValue='2021'>
										<Option value='2020'>2020</Option>
									</Select>
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
							<Checkbox.Group options={plainOptions} />
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Special Instructions</strong>
								</label>
							}>
							<Input size='large' placeholder='e.g Packaging, Storage' />
						</Form.Item>

						<strong className='muted-font'>Add MTO Information </strong>
						<Form.Item
							label={
								<label>
									<strong>Discipline</strong>
								</label>
							}>
							<Radio.Group size='large'>
								<Radio
									key='Electrical MTO'
									value='PElectrical MTOrElectrical MTOoduct'>
									{' '}
									<strong>Electrical MTO</strong>
								</Radio>
								<Radio key='Piping MTO' value='Piping MTO'>
									{' '}
									<strong>Piping MTO</strong>
								</Radio>
								<Radio key='Civil MTO' value='Civil MTO'>
									{' '}
									<strong>Civil MTO</strong>
								</Radio>
								<Radio key='Instrumentation MTO' value='Instrumentation MTO'>
									{' '}
									<strong>Instrumentation MTO</strong>
								</Radio>
							</Radio.Group>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>Sub-discipline</strong>
								</label>
							}>
							<Select size='large' placeholder='Search'>
								<Option value='Sub-Discipline 1'> Sub Discipline 1</Option>
							</Select>
						</Form.Item>

						<Form.Item
							label={
								<label>
									<strong>MTO Form Name</strong>
								</label>
							}>
							<Select size='large'>
								<Option value='forn name 1'> Form Name 1</Option>
							</Select>
						</Form.Item>

						<Form.Item>
							<Button className='site-btn-sm'> Add </Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default OtherDetails;
