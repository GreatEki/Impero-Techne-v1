import React from 'react';
import { Pagination, Row, Col } from 'antd';

const AddedProductsPanel = () => {
	return (
		<div className='table-responsive'>
			<table className='table table-borderless table-striped'>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={{ width: '30rem' }}>
							<span className='text-muted'>Description</span>
							<br />
							<strong className='word-break word-wrap'>
								{' '}
								Procurement & Supply of Condensate Tank & 4 Actuated Ball Valves
								& Fittings for Pipeline System
							</strong>
						</td>
						<td>
							<span className='text-muted'>Quantity</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>Unit</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>Estimated Cost</span>
							<br />
							<strong>938</strong>
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

export default AddedProductsPanel;
