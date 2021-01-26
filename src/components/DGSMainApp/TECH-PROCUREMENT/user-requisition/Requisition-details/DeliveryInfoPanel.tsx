import React from 'react';
import { Row, Col } from 'antd';

const DeliveryInfoPanel = () => {
	return (
		<div>
			<Row>
				<Col span={20} offset={2}>
					{/*  */}
					<Row gutter={50} className='my-3'>
						<Col span={8}>
							<small className='txt-small'>Seller's Country</small>
							<br />
							<strong>Nigeria</strong>
						</Col>
						<Col span={8}>
							<small className='txt-small'>Seller's State</small>
							<br />
							<strong>Lagos</strong>
						</Col>
						<Col span={8}>
							<small className='txt-small'>Project</small>
							<br />
							<strong>Lekki</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col span={24}>
							<small className='txt-small'>Special Instructions</small>
							<br />
							<strong>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
								quia, minima tempore non voluptate debitis vero ipsum quaerat
								odio laborum necessitatibus natus nemo? Aperiam quis eaque a
								consequuntur, error labore.
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col span={24}>
							<small className='txt-small'>Date Required on Site</small>
							<br />
							<strong>21st January, 2021</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default DeliveryInfoPanel;
