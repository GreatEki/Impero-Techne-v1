import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Tabs } from 'antd';
import MTOFormDetails from './MTOFormDetails';
import { RootStore } from 'appRedux/Store';
import { MTOI } from 'appRedux/types/mtoTypes';

const { TabPane } = Tabs;

const ViewMTO: React.FC = (props: any) => {
	const mtoId = props.match.params.id;

	// Loading all our mtos from our redux store.
	const { mtoList } = useSelector((state: RootStore) => state.mto);

	const [theMto, setTheMto] = useState<MTOI | undefined>({
		projectInfo: {
			project_id: '',
			project_name: '',
			client_name: '',
			company_name: '',
			discipline: '',
			discipline_subType: '',
			request_formName: '',
		},
		addedItems: [],
		status: 'Opened',
	});

	useEffect(() => {
		getMto();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mtoId]);

	function getMto() {
		const foundMto = mtoList.find(
			(mto) => mto.projectInfo.project_id === mtoId
		);
		setTheMto(foundMto);
	}
	return (
		<div>
			<Row gutter={50} className='my-5'>
				<Col span={22} offset={1}>
					<Tabs defaultActiveKey='1'>
						<TabPane tab='MTO Form Details' key='1'>
							<MTOFormDetails mtoId={mtoId} theMto={theMto} />
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
