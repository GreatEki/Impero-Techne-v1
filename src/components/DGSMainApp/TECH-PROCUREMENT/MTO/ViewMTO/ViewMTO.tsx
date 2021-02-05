import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Tabs, Collapse } from 'antd';
import MTOFormDetails from './MTOFormDetails';
import { RootStore } from 'appRedux/Store';
import { MTOI } from 'appRedux/types/mtoTypes';
import AddedItems from './AddedItems';
import * as BsIcon from 'react-icons/bs';

const { TabPane } = Tabs;
const { Panel } = Collapse;

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
							<Collapse
								expandIconPosition='right'
								defaultActiveKey={['added-items']}>
								<Panel
									header={
										<label className='muted-font'>
											{' '}
											<BsIcon.BsDot className='site-dot' /> Added Items{' '}
										</label>
									}
									key='added-items'>
									<AddedItems theMto={theMto} />
								</Panel>
							</Collapse>
							,
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
};

export default ViewMTO;
