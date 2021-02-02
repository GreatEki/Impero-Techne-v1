import React from 'react';
import { Card, Row, Col, Tabs, Steps } from 'antd';
import * as BsIcon from 'react-icons/bs';

const { TabPane } = Tabs;

const { Step } = Steps;

const MTOFormDetails = () => {
	const showInitiated = () => {
		return (
			<>
				<small className='fw-bold fs-16'> Engr Olamide Anderson</small>
				<br />
				<small className='fw-bold fs-12'>
					Senior Engineer, Electrical Engineering Department
				</small>
				<br />
				<small className='fs-14 my-4'>
					{' '}
					<small className='muted-font fs-14'>
						Batch ID
					</small> DKUBN65764747{' '}
				</small>
				<Row gutter={50}>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsCalendar className='site-primary' /> 12 Aug, 2021
						</small>
					</Col>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsBookmark className='site-primary' /> Created
						</small>
					</Col>
				</Row>
			</>
		);
	};
	const showChecked = () => {
		return (
			<>
				<small className='fw-bold fs-16'> Engr Olamide Anderson</small>
				<br />
				<small className='fw-bold fs-12'>
					Senior Engineer, Electrical Engineering Department
				</small>
				<br />
				<small className='fs-14 my-4'>
					{' '}
					<small className='muted-font fs-14'>
						Batch ID
					</small> DKUBN65764747{' '}
				</small>
				<Row>
					<Col span={24}>
						<p className='fs-12 site-bg-primary p-2'>
							But I must explain to you how all this mistaken idea of denouncing
							pleasure and perishing goods was born and I will give you a
							complete account of the system and expound the actual
						</p>
					</Col>
				</Row>

				<Row gutter={50}>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsCalendar className='site-primary' /> 12 Aug, 2021
						</small>
					</Col>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsBookmark className='site-primary' /> Created
						</small>
					</Col>
				</Row>
			</>
		);
	};
	const showAuthenticated = () => {
		return (
			<>
				<small className='fw-bold fs-16'> Engr Olamide Anderson</small>
				<br />
				<small className='fw-bold fs-12'>
					Senior Engineer, Electrical Engineering Department
				</small>
				<br />
				<small className='fs-14 my-4'>
					{' '}
					<small className='muted-font fs-14'>
						Batch ID
					</small> DKUBN65764747{' '}
				</small>
				<Row gutter={50}>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsCalendar className='site-primary' /> 12 Aug, 2021
						</small>
					</Col>
					<Col span={12}>
						<small>
							{' '}
							<BsIcon.BsBookmark className='site-success' /> Accepted
						</small>
					</Col>
				</Row>
			</>
		);
	};
	return (
		<div>
			<Row gutter={30}>
				<Col span={16}>
					<Card>
						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Project Name </small>
								<br />
								<strong>
									Procurement & Supply of Condensate Tank and 4 Actuated Ball
									Valves & Fittings for Pipeline Sysytem
								</strong>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Project ID</small>
								<br />
								<strong> LKBD6474373747MN </strong>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Company</small>
								<br />
								<strong>DGS Integrated Products Limited</strong>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Client</small>
								<br />
								<strong>Nigerian Gas Company</strong>
							</Col>
						</Row>
						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Form Name </small>
								<br />
								<strong>Wall Socket andf Fittings</strong>
							</Col>
						</Row>
						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Form Category</small>
								<br />
								<strong>Electrical</strong>
							</Col>
						</Row>

						<Row gutter={50} className='my-3'>
							<Col>
								<small className='muted-font'>Form Sub-Category</small>
								<br />
								<strong>Electrical & Equipment & Accessories</strong>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Steps progressDot direction='vertical'>
							<Step
								title={<span className='site-primary'> You Initiated </span>}
								description={showInitiated()}
							/>
							<Step
								title={<span className='site-primary'> Checked</span>}
								description={showChecked()}
							/>
							<Step
								title={<span className='site-primary'> Authenticated</span>}
								description={showAuthenticated()}
							/>
						</Steps>
						,
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MTOFormDetails;
