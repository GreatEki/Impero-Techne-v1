import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { RootStore } from 'appRedux/Store';

const MTOFormDetails = () => {
	const { projectInfo } = useSelector((state: RootStore) => state.mto);
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
							<p className='txt-small'>Form Name </p>
							<strong>
								{projectInfo ? projectInfo.request_formName : null}
							</strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
							<p className='txt-small'> Form Category </p>
							<strong>{projectInfo ? projectInfo.discipline : null}</strong>
						</Col>
						<Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
							<p className='txt-small'>Form Sub-Category</p>
							<strong>
								{projectInfo ? projectInfo.discipline_subType : null}
							</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default MTOFormDetails;
