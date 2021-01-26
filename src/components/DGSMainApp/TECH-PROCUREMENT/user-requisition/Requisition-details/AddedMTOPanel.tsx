import React from 'react';
import { Row, Col, Pagination } from 'antd';

const AddedMTOPanel = () => {
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
					<tr>
						<td style={{ width: '30rem' }}>
							<span className='text-muted'>Name</span>
							<br />
							<strong className='word-break word-wrap'>
								{' '}
								Procurement & Supply of Condensate Tank & 4 Actuated Ball Valves
								& Fittings for Pipeline System
							</strong>
						</td>
						<td>
							<span className='text-muted'>Serial No</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>Items</span>
							<br />
							<strong>100</strong>
						</td>
						<td>
							<span className='text-muted'>No of Items</span>
							<br />
							<strong>938</strong>
						</td>
						<td>
							<span className='text-muted'>Total Cost</span>
							<br />
							<strong>
								<span className='muted-font'>$</span> 2, 384, 657
							</strong>
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
					<button className='btn-xlg site-bg-primary text-white'>
						{' '}
						Submit{' '}
					</button>
				</Col>
			</Row>
		</div>
	);
};

export default AddedMTOPanel;
