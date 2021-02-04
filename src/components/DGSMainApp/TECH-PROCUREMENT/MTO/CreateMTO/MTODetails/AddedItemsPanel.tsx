import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Row, Col, Empty } from 'antd';
import { FiMinusSquare } from 'react-icons/fi';
import { RootStore } from 'appRedux/Store';
import { MtoStorageItemI } from 'appRedux/types/mtoTypes';
import { removeMtoStorageItem } from 'appRedux/actions/mtoActions';
import ConfirmSubmissionModal from './ConfimSubmissionModal';

const AddedItemsPanel = () => {
	const dispatch = useDispatch();

	const [store, setStore] = useState<MtoStorageItemI[] | null>([]);
	const { mtoStorageItems } = useSelector((state: RootStore) => state.mto);

	const [submissionVisible, setSubmissionVisible] = useState(false);

	useEffect(() => {
		setStore(mtoStorageItems);

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mtoStorageItems]);

	const removeItem = (id: string) => {
		dispatch(removeMtoStorageItem(id));
	};

	const showConfimationModal = () => {
		setSubmissionVisible(true);
	};

	return (
		<div className='table-responsive'>
			<table className='table table-borderless table-striped'>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{store ? (
						store.map((item: MtoStorageItemI) => (
							<tr key={item.itemId}>
								<td style={{ width: '20rem' }}>
									<span className='text-muted'>Item Description</span>
									<br />
									<strong className='word-break word-wrap'>
										{' '}
										{item.description}
									</strong>
								</td>
								<td>
									<span className='text-muted'>Voltage</span>
									<br />
									<strong>{item.voltage}</strong>
								</td>
								<td>
									<span className='text-muted'>Unit</span>
									<br />
									<strong>{item.unit}</strong>
								</td>
								<td>
									<span className='text-muted'>Quantity to Buy</span>
									<br />
									<strong> {item.qty_required_to_buy} </strong>
								</td>
								<td>
									<span className='text-muted'>Unit Price</span>
									<br />
									<strong>{item.unit_price}</strong>
								</td>
								<td>
									<span className='text-muted'>Total Price</span>
									<br />
									<strong>$ {item.total_price}</strong>
								</td>
								<td onClick={() => removeItem(item.itemId)}>
									<span className='text-muted'></span>
									<br />
									<FiMinusSquare className='site-danger' />
								</td>
							</tr>
						))
					) : (
						<Fragment>
							<Empty />
						</Fragment>
					)}
				</tbody>
			</table>

			{/* <section
				className='my-5'
				style={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination defaultCurrent={1} total={50} />
			</section> */}

			<Row>
				<Col span={6}>
					<button onClick={showConfimationModal} className='btn-xlg'>
						{' '}
						Submit{' '}
					</button>
				</Col>
			</Row>

			<ConfirmSubmissionModal
				visible={submissionVisible}
				setVisible={setSubmissionVisible}
			/>
		</div>
	);
};

export default AddedItemsPanel;
