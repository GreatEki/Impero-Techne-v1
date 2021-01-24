import React from 'react';
import { Row, Col, Descriptions } from 'antd';

const AddedItemsPanel = () => {
	return (
		<div>
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
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default AddedItemsPanel;
