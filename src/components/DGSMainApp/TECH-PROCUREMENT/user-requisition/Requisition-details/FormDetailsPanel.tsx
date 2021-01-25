import React from 'react';
import { Row, Col } from 'antd';
const FormDetailsPanel = () => {
	return (
		<div>
			<Row gutter={50}>
				<Col span={20} offset={2}>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Request Title</p>
							<strong>Personnel Protective Equipments (PPE) </strong>
						</Col>
						<Col span={12}>
							<p className='txt-small'>Project</p>
							<strong>Sapele Gas Plant</strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Client</p>
							<strong>Seplat</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default FormDetailsPanel;
