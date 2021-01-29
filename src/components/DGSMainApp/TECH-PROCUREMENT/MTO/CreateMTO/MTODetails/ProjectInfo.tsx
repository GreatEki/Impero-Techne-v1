import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { RootStore } from 'appRedux/Store';

const ProjectInfo = () => {
	const { projectInfo } = useSelector((state: RootStore) => state.mto);

	return (
		<div>
			<Row gutter={50}>
				<Col
					xs={{ span: 24 }}
					sm={{ span: 24 }}
					md={{ span: 20, offset: 2 }}
					lg={{ span: 20, offset: 2 }}>
					<Row gutter={50} className='my-2'>
						<Col span={24}>
							<p className='txt-small'>Project Name </p>
							<strong> {projectInfo ? projectInfo.project_name : null} </strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Project ID</p>
							<strong>LKJBJ18965575</strong>
						</Col>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Client</p>
							<strong>{projectInfo ? projectInfo.client_name : null}</strong>
						</Col>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
							<p className='txt-small'>Company</p>
							<strong>{projectInfo ? projectInfo.company_name : null}</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ProjectInfo;
