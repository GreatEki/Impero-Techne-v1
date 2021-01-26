import React from 'react';
import { Card, Row, Col } from 'antd';

const MTOFormDetails = () => {
	return (
		<div>
			<Row gutter={50}>
				<Col
					xs={{ span: 24 }}
					sm={{ span: 24 }}
					md={{ span: 20, offset: 2 }}
					lg={{ span: 20, offset: 2 }}>
					<Row gutter={50}>
						<Col span={24}>
							<p className='txt-small'>Project Name </p>
							<strong>
								Procurement & Supply of Condensate Tank & 4 Actual Ball Valves &
								Fitting for Pipeling Sysytem
							</strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Project ID </p>
							<strong>LKJBJ18965575</strong>
						</Col>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Client</p>
							<strong>Nigerian Gas Company</strong>
						</Col>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Company</p>
							<strong>DGS Integrated Products Limited </strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default MTOFormDetails;
