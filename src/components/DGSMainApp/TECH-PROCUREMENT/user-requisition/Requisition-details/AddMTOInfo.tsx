import React, { useState } from 'react';
import { Table, Input, Select, Radio, Form, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

interface MtoInfoI {
	itemId: string;
	discipline: string;
	sub_discipline: string;
	mto_formname: string;
}

const AddMTOInfo = () => {
	const [mtoInfo, setMtoInfo] = useState<MtoInfoI>({
		itemId: '',
		discipline: '',
		sub_discipline: '',
		mto_formname: '',
	});

	const [mtoList, setMtoList] = useState<MtoInfoI[]>([]);

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

	const handleChange = (key: string, value: string) => {
		setMtoInfo({ ...mtoInfo, [key]: value });
	};

	const onFinish = () => {
		const itemId = uuidv4();
		// Update the item with the id
		const updatedItem = Object.assign({}, mtoInfo, { itemId });
		setMtoList((mtoList) => [updatedItem, ...mtoList]);
	};

	const getData = () => {
		if (mtoList.length) {
			mtoList.map((item) => Object.assign({}, item, { key: item.itemId }));
		} else {
			return [];
		}
	};
	return (
		<div className='my-5'>
			<section>
				<strong className='muted-font'>Add MTO Information </strong>
				<Form.Item
					label={
						<label>
							<strong>Discipline</strong>
						</label>
					}>
					<Radio.Group
						size='large'
						onChange={(e) => handleChange('discipline', e.target.value)}>
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
					<Select
						size='large'
						placeholder='Search'
						onChange={(value: string) => handleChange('sub_discipline', value)}>
						<Option value='Sub-Discipline 1'> Sub Discipline 1</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label={
						<label>
							<strong>MTO Form Name</strong>
						</label>
					}>
					<Select
						size='large'
						onChange={(value: string) => handleChange('mto_formname', value)}>
						<Option value='forn name 1'> Form Name 1</Option>
					</Select>
				</Form.Item>

				<Form.Item>
					<Button onClick={onFinish} className='site-btn-sm'>
						{' '}
						Add{' '}
					</Button>
				</Form.Item>
			</section>

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
		</div>
	);
};

export default AddMTOInfo;
