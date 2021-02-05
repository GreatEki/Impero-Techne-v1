import React from 'react';
import { Row, Col, Pagination, Empty } from 'antd';
import { MTOI } from 'appRedux/types/mtoTypes';
import { numberWithCommas } from 'utils/numberWithCommas';

interface Props {
	theMto: MTOI | undefined;
}

const AddedMTOPanel: React.FC<Props> = ({ theMto }) => {
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
					</tr>
				</thead>
				<tbody>
					{theMto?.addedItems ? (
						theMto.addedItems.map((item) => (
							<tr key={item.itemId}>
								<td style={{ width: '15rem' }}>
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
									<strong> {item.voltage} </strong>
								</td>
								<td>
									<span className='text-muted'>Unit</span>
									<br />
									<strong> {item.unit} </strong>
								</td>
								<td>
									<span className='text-muted'>Quantity to Buy</span>
									<br />
									<strong> {item.qty_required_to_buy} </strong>
								</td>
								<td>
									<span className='text-muted'>Unit Price</span>
									<br />
									<strong>
										<span className='muted-font'>$</span>{' '}
										{numberWithCommas(item.unit_price)}
									</strong>
								</td>
								<td>
									<span className='text-muted'>Total Price</span>
									<br />
									<strong>
										<span className='muted-font'>$</span>{' '}
										{numberWithCommas(item.total_price)}
									</strong>
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
