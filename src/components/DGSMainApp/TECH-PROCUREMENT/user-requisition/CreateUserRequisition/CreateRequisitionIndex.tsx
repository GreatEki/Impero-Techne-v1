import React, { useState } from 'react';
import { Collapse, Row, Col } from 'antd';
import OtherDetails from '../Requisition-details/OtherDetails';
import RequisitionDetails from '../Requisition-details/RequisitionDetails';
import ProjectDetailForm from './ProjectDetailForm';

const { Panel } = Collapse;
const CreateRequisitionIndex = () => {
	const [currentPage, setCurrentPage] = useState<number>(0);

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	switch (currentPage) {
		case 0:
			return <ProjectDetailForm next={next} />;

		case 1:
			return <RequisitionDetails next={next} />;

		case 2:
			return (
				<Row className='mt-5'>
					<Col span={20} offset={2}>
						<Collapse
							expandIconPosition='right'
							defaultActiveKey='other-details'>
							<Panel
								className='my-3'
								header={<label className='muted-font'>Other Details</label>}
								key='other-details'>
								<OtherDetails />
							</Panel>
						</Collapse>
					</Col>
				</Row>
			);

		default:
			return <ProjectDetailForm next={next} />;
	}
};

export default CreateRequisitionIndex;
