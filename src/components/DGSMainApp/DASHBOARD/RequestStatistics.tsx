import React, { useState } from 'react';
import * as TiIcons from 'react-icons/ti';
import { Row, Col, Card } from 'antd';
import { Line } from 'react-chartjs-2';

const RequestStatistics = () => {
	const acceptedRequests = {
		labels: ['Mon, Tue, Wed, Thur, Fri'],
		datasets: [
			{
				label: 'Accepted Requests',
				data: [20, 2, 18, 5, 3],
				borderColor: ['#42ba96'],
				// backgroundColor: ['#42ba96'],
			},
		],
	};
	const queriedRequests = {
		labels: ['Mon, Tue, Wed, Thur, Fri'],
		datasets: [
			{
				label: 'Accepted Requests',
				data: [20, 2, 18, 5, 3],
				borderColor: ['#ffc107'],
				// backgroundColor: ['#ffc107'],
			},
		],
	};
	const rejectedRequests = {
		labels: ['Mon, Tue, Wed, Thur, Fri'],
		datasets: [
			{
				label: 'Accepted Requests',
				data: [20, 2, 18, 5, 3],
				borderColor: ['#df4759'],
				// backgroundColor: ['#df4759'],
			},
		],
	};

	const options = {
		legend: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						display: false,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						display: false,
					},
				},
			],
		},
		elements: {
			line: {
				tension: 0,
			},
		},
	};

	return (
		<>
			<section className='d-flex justify-content-between'>
				<strong>
					<TiIcons.TiChartArea className='site-primary' /> Request Statistics
				</strong>
				<div>
					<strong className='muted-font'> Total Requests </strong>
					<strong> 20 </strong>
				</div>
			</section>

			<Card>
				<Row>
					<Col span={8}>
						<strong>13</strong>
						<p className='site-success fw-bold'>Accepted Requests</p>
						<Line type='line' data={acceptedRequests} options={options} />
					</Col>
					<Col span={8}>
						<strong>2</strong>
						<p className='site-warning fw-bold'>Queried Requests</p>
						<Line data={queriedRequests} options={options} />
					</Col>
					<Col span={8}>
						<strong>5</strong>
						<p className='site-danger fw-bold'>Rejected Requests</p>
						<Line data={rejectedRequests} options={options} />
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default RequestStatistics;
