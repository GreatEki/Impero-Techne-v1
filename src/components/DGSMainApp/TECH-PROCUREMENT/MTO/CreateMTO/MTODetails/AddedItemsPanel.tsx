import React from 'react';
import { Pagination, Row, Col } from 'antd';
import { FiMinusSquare } from 'react-icons/fi';

const AddedItemsPanel = () => {
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
					<tr>
						<td style={{ width: '20rem' }}>
							<span className='text-muted'>Item Description</span>
							<br />
							<strong className='word-break word-wrap'>
								{' '}
								Procurement & Supply of Condensate Tank & 4 Actuated Ball Valves
								& Fittings for Pipeline System
							</strong>
						</td>
						<td>
							<span className='text-muted'>Voltage</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>Unit</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>Quantity to Buy</span>
							<br />
							<strong>938</strong>
						</td>
						<td>
							<span className='text-muted'>Unit Price</span>
							<br />
							<strong>938</strong>
						</td>
						<td>
							<span className='text-muted'>Total Price</span>
							<br />
							<strong>$ 2,342, 589</strong>
						</td>
						<td>
							<span className='text-muted'></span>
							<br />
							<FiMinusSquare className='site-danger' />
						</td>
					</tr>
				</tbody>
			</table>

			<section
				className='my-5'
				style={{ display: 'flex', justifyContent: 'center' }}>
				<Pagination defaultCurrent={1} total={50} />
			</section>

			<Row>
				<Col span={6}>
					<button className='btn-xlg'> Submit </button>
				</Col>
			</Row>
		</div>
	);
};

export default AddedItemsPanel;
