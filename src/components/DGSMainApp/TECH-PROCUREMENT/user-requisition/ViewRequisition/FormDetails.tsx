import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { RootStore } from 'appRedux/Store';
import { RequisitionsI } from 'appRedux/types/userRequisitionTypes';

interface Props {
	theReq: RequisitionsI | undefined;
}

const FormDetailsPanel: React.FC<Props> = ({ theReq }) => {
	return (
		<div>
			<Row gutter={50}>
				<Col span={20} offset={2}>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Request Title</p>
							<strong>
								{theReq ? theReq.project_info.request_title : null}
							</strong>
						</Col>
						<Col span={12}>
							<p className='txt-small'>Project</p>
							<strong>
								{theReq ? theReq.project_info.project_name : null}
							</strong>
						</Col>
					</Row>
					<Row gutter={50} className='my-2'>
						<Col span={12}>
							<p className='txt-small'>Client</p>
							<strong>{theReq ? theReq.project_info.client_name : null}</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default FormDetailsPanel;
