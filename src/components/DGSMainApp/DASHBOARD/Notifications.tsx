import React from 'react';
import * as TiIcons from 'react-icons/ti';
import * as MdIcon from 'react-icons/md';
import * as BsIcon from 'react-icons/bs';
import { Card, Space } from 'antd';

const Notifications: React.FC = () => {
	return (
		<div>
			<section className='d-flex justify-content-between'>
				<strong>
					<TiIcons.TiChartArea className='site-primary' /> Notifications{' '}
				</strong>
				<small> Recently</small>
			</section>

			<Card>
				<div style={{ borderLeft: '	#42ba96 4px solid', padding: '1rem' }}>
					<strong>User Requisition Order Accepted by Checker</strong>
					<br />
					<>
						<small>Personnel Protective Equipment Requisition title </small>
						<small>
							{' '}
							<BsIcon.BsDot className='site-dot' /> Sapele Gas Plant{' '}
						</small>
					</>
					<div className='mt-4'>
						<Space size='large'>
							<small className='d-inline'>
								{' '}
								<MdIcon.MdAlarm className='site-danger' /> Today{' '}
							</small>
							<small className='d-inline'>
								{' '}
								<BsIcon.BsBookmark className='site-warning' /> Queried{' '}
							</small>
						</Space>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Notifications;
