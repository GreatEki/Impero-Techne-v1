import React from 'react';
import { Card, Row, Col, Tabs } from 'antd';
import MTOFormDetails from './MTOFormDetails';

const { TabPane } = Tabs;

const ViewMTO = () => {
	return (
		<div>
			<Row gutter={50} className='my-5'>
				<Col span={22} offset={1}>
					<Tabs defaultActiveKey='1'>
						<TabPane tab='MTO Form Details' key='1'>
							<MTOFormDetails />
						</TabPane>
						<TabPane tab='Added Items' key='2'>
							Content of Tab Pane 2
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
};

export default ViewMTO;
