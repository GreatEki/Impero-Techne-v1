import React from 'react';
import { Card, Typography } from 'antd';
import * as BsIcon from 'react-icons/bs';

const { Title } = Typography;

const RecentlyOpened = () => {
	return (
		<>
			<Title level={3}>
				<BsIcon.BsSlashSquare className='site-warning fw-bold' /> &nbsp;
				Recently Opened{' '}
			</Title>
			<Card>
				<div className='bg-grey my-3'>
					<section className='d-flex'>
						<div className='p-2'>
							<img src='/icons/tech_procurement.svg' alt='props' />
						</div>

						<div className='p-2'>
							<strong>Tech Procurement </strong>
							<strong>
								{' '}
								<BsIcon.BsDot className='site-dot' /> MTO{' '}
							</strong>
							<div>
								<small className='fw-bold'>
									Engineering, Procurement and Construction of 10 Gas Pipelines
									from PAOC to Oredo Flow Station
								</small>
							</div>
						</div>
					</section>
				</div>

				<div className='bg-grey my-3'>
					<section className='d-flex'>
						<div className='p-2'>
							<img src='/icons/tech_procurement.svg' alt='props' />
						</div>

						<div className='p-2'>
							<strong>Reports</strong>
							<strong>
								{' '}
								<BsIcon.BsDot className='site-dot' /> Daily Reports{' '}
							</strong>
							<div>
								<small className='fw-bold'>
									OANDO Project Site Reporting 12, January, 2021
								</small>
							</div>
						</div>
					</section>
				</div>

				<div className='bg-grey my-3'>
					<section className='d-flex'>
						<div className='p-2'>
							<img src='/icons/tech_procurement.svg' alt='props' />
						</div>

						<div className='p-2'>
							<strong>Tech Procurement </strong>
							<strong>
								{' '}
								<BsIcon.BsDot className='site-dot' /> User Requisition{' '}
							</strong>
							<div>
								<small className='fw-bold'>
									Engineering, Procurement and Construction of 10 Gas Pipelines
									from PAOC to Oredo Flow Station
								</small>
							</div>
						</div>
					</section>
				</div>
			</Card>
		</>
	);
};

export default RecentlyOpened;
