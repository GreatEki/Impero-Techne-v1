import React from 'react';
import { Pagination, Empty } from 'antd';
import { RequisitionsI } from 'appRedux/types/userRequisitionTypes';
import { numberWithCommas } from 'utils/numberWithCommas';

interface Props {
	theReq: RequisitionsI | undefined;
}
const Products: React.FC<Props> = ({ theReq }) => {
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
					{theReq?.products ? (
						theReq.products.map((item) => (
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
							</tr>
						))
					) : (
						<tr>
							<td className='text-center' colSpan={6}>
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
		</div>
	);
};

export default Products;
