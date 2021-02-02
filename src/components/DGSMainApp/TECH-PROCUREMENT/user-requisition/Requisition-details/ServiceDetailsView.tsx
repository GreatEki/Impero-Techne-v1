import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { RootStore } from 'appRedux/Store';
import { ServiceDetailsI } from 'appRedux/types/userRequisitionTypes';
import moment from 'moment';

const ServiceDetailsView = () => {
	const { serviceDetail } = useSelector(
		(state: RootStore) => state.userRequisition
	);
	const [serviceObj, setServiceObj] = useState<ServiceDetailsI>({
		intro_and_desc: '',
		scope_of_works: '',
		reference_code_and_stds: '',
		detailed_desc_of_work_and_specs: '',
		technical_eval_req: '',
		reference_drawings: '',
		work_schedule: '',
		commercial: '',
		terms_and_conditions: '',
		payment_terms: '',
		renumeration: '',
		validity_period: '',
		delivery_address: '',
		special_instructions: '',
		date_required_on_site: '',
	});
	useEffect(() => {
		setServiceObj(serviceDetail);
	}, [serviceDetail]);
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
							<strong>{serviceObj ? serviceObj.intro_and_desc : null}</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Scope of Works</small>
							<br />
							<strong>{serviceObj ? serviceObj.scope_of_works : null}</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>
								Reference Codes and Standards
							</small>
							<br />
							<strong>
								{serviceObj ? serviceObj.reference_code_and_stds : null}
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
								{serviceObj ? serviceObj.detailed_desc_of_work_and_specs : null}
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
								{serviceObj ? serviceObj.technical_eval_req : null}.
							</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Payment Terms</small>
							<br />
							<strong>{serviceObj ? serviceObj.payment_terms : null}</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Renumeration</small>
							<br />
							<strong>{serviceObj ? serviceObj.renumeration : null}</strong>
						</Col>
					</Row>

					<Row gutter={50} className='my-3'>
						<Col>
							<small className='muted-font'>Validity Period</small>
							<br />
							<strong>
								{serviceObj
									? moment(serviceObj.validity_period).format('DD-MMMM-YYYY')
									: null}{' '}
							</strong>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ServiceDetailsView;
