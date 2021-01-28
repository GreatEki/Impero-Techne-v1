import React from 'react';
import * as TiIcons from 'react-icons/ti';
import * as MdIcon from 'react-icons/md';
import * as BsIcon from 'react-icons/bs';
import { Card, Space, Typography } from 'antd';

const { Title } = Typography;

const Notifications: React.FC = () => {
	return (
		<div className='mt-4'>
			<section className='d-flex justify-content-between'>
				<Title level={3}>
					<BsIcon.BsBell className='site-danger' /> Notifications{' '}
				</Title>
				<strong> Recently</strong>
			</section>

			<Card>
				<div style={{ borderLeft: '	#42ba96 4px solid', padding: '1rem' }}>
					<strong>User Requisition Order Accepted by Checker</strong>
					<br />
					<>
						<small className='muted-font'>
							Personnel Protective Equipment Requisition title{' '}
						</small>
						<small className='muted-font'>
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
