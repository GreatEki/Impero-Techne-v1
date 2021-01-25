import React from 'react';
import { Row, Col } from 'antd';

const ProjectInfo = () => {
	return (
		<div>
			<Row gutter={50}>
				<Col span={20} offset={2}>
					<Row gutter={50} className='my-2'>
						<Col span={24}>
							<p className='txt-small'>Project Name </p>
							<strong>Personnel Protective Equipments (PPE) </strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col span={8}>
							<p className='txt-small'>Project ID</p>
							<strong>LKJBJ18965575</strong>
						</Col>
						<Col span={8}>
							<p className='txt-small'>Client</p>
							<strong>Nigerian Gas Company</strong>
						</Col>
						<Col span={8}>
							<p className='txt-small'>Client</p>
							<strong>DGS Integrated Products Limited</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ProjectInfo;
