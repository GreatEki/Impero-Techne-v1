import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, Row, Col, Empty } from 'antd';
import { ProductStorageItemI } from 'appRedux/types/userRequisitionTypes';
import { RootStore } from 'appRedux/Store';
import { numberWithCommas } from 'utils/numberWithCommas';
import { FiMinusSquare } from 'react-icons/fi';
import { removeItemfromProductStorageItems } from 'appRedux/actions/userRequisitionActions';

interface Props {
	next: () => void;
}
const AddedProductsPanel: React.FC<Props> = ({ next }) => {
	const dispatch = useDispatch();
	const [storeItems, setStoreItems] = useState<ProductStorageItemI[]>([]);

	const { productStorageItems } = useSelector(
		(state: RootStore) => state.userRequisition
	);

	useEffect(() => {
		setStoreItems(productStorageItems);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productStorageItems]);

	const removeItem = (theItem: ProductStorageItemI) => {
		console.log(theItem);
		setStoreItems(storeItems.filter((item) => item.itemId !== theItem.itemId));
		dispatch(removeItemfromProductStorageItems(storeItems));
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
					</tr>
				</thead>
				<tbody>
					{storeItems ? (
						storeItems.map((item) => (
							<tr key={item.itemId}>
								<td style={{ width: '30rem' }}>
									<span className='text-muted'>Description</span>
									<br />
									<strong className='word-break word-wrap'>
										{' '}
										{item.description}
									</strong>
								</td>
								<td>
									<span className='text-muted'>Quantity</span>
									<br />
									<strong>{item.quantity}</strong>
								</td>
								<td>
									<span className='text-muted'>Unit</span>
									<br />
									<strong>{item.unit}</strong>
								</td>
								<td>
									<span className='text-muted'>Estimated Cost</span>
									<br />
									<strong>{numberWithCommas(item.estimated_cost)}</strong>
								</td>
								<td onClick={() => removeItem(item)}>
									<span className='text-muted'></span>
									<br />
									<FiMinusSquare className='site-danger' />
								</td>
							</tr>
						))
					) : (
						<tr>
							<td>
								<Empty />
							</td>
						</tr>
					)}
				</tbody>
			</table>

			<section
				className='my-5'
				style={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination defaultCurrent={1} total={1} />
			</section>

			<Row>
				<Col span={6}>
					<button onClick={next} className='btn-xlg'>
						{' '}
						Continue{' '}
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default AddedProductsPanel;
