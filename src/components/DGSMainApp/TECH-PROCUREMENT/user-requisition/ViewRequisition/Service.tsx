import React from 'react';
import { Row, Col } from 'antd';
import { RequisitionsI } from 'appRedux/types/userRequisitionTypes';

interface Props {
	theReq: RequisitionsI | undefined;
}

const Service: React.FC<Props> = ({ theReq }) => {
	console.log(theReq);
	return (
		<div>
			<Row>
				<Col span={20} offset={2}>
					{/*  */}

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>
								Introduction & Brief Description of Proposed Development
							</small>
							<br />
							<strong>
								{' '}
								{theReq ? theReq.service?.intro_and_desc : null}{' '}
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Scope of Works</small>
							<br />
							<strong>
								{' '}
								{theReq ? theReq.service?.scope_of_works : null}{' '}
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>
								Reference Codes and Standards
							</small>
							<br />
							<strong>
								{theReq ? theReq.service?.reference_code_and_stds : null}
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>
								Detailed Description of Works and Specification
							</small>
							<br />
							<strong>
								{theReq
									? theReq.service?.detailed_desc_of_work_and_specs
									: null}
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>
								Technical Evaluation Requirement
							</small>
							<br />
							<strong>
								{theReq ? theReq.service?.technical_eval_req : null}
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Payment Terms</small>
							<br />
							<strong> {theReq ? theReq.service?.payment_terms : null} </strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Renumeration</small>
							<br />
							<strong> {theReq ? theReq.service?.renumeration : null} </strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Validity Period</small>
							<br />
							<strong>{theReq ? theReq.service?.validity_period : null}</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Service;
