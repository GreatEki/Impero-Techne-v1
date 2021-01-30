import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { RootStore } from 'appRedux/Store';
const FormDetailsPanel = () => {
	const { userReq_ProjectInfo } = useSelector(
		(state: RootStore) => state.userRequisition
	);
	return (
		<div>
			<Row gutter={50}>
				<Col span={20} offset={2}>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Request Title</p>
							<strong>
								{userReq_ProjectInfo ? userReq_ProjectInfo.request_title : null}
							</strong>
						</Col>
						<Col span={12}>
							<p className='txt-small'>Project</p>
							<strong>
								{userReq_ProjectInfo ? userReq_ProjectInfo.project_name : null}
							</strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Client</p>
							<strong>
								{userReq_ProjectInfo ? userReq_ProjectInfo.client_name : null}
							</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default FormDetailsPanel;
