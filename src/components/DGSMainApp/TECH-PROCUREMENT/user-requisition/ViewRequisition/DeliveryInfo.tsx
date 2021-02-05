import React from 'react';
import { Row, Col } from 'antd';
import { RequisitionsI } from 'appRedux/types/userRequisitionTypes';
import moment from 'moment';

interface Props {
	theReq: RequisitionsI | undefined;
}

const DeliveryInfo: React.FC<Props> = ({ theReq }) => {
	return (
		<div>
			<Row>
				<Col span={20} offset={2}>
					{/*  */}
					<Row gutter={50} className='my-3'>
						<Col span={8}>
							<small className='txt-small'>Seller's Country</small>
							<br />
							<strong> {theReq?.otherDetails?.sellers_country} </strong>
						</Col>
						<Col span={8}>
							<small className='txt-small'>Seller's State</small>
							<br />
							<strong>{theReq?.otherDetails?.sellers_state}</strong>
						</Col>
						<Col span={8}>
							<small className='txt-small'>Project</small>
							<br />
							<strong> {theReq?.project_info.project_name} </strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<small className='txt-small'>Delivery Address </small>
							<br />
							<strong>{theReq?.otherDetails?.delivery_address}</strong>
						</Col>

						<Col xs={24} sm={24} md={12} lg={12}>
							<small className='txt-small'>Special Instructions</small>
							<br />
							<strong>{theReq?.otherDetails?.del_special_instruction}</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col span={24}>
							<small className='txt-small'>Date Required on Site</small>
							<br />
							<strong>
								{moment(theReq?.otherDetails?.date_req_onsite).format(
									'DD MMMM YYYY'
								)}
							</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default DeliveryInfo;
