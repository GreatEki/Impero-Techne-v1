import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Row, Col } from 'antd';
import { createRequisition } from 'appRedux/actions/userRequisitionActions';
import { RootStore } from 'appRedux/Store';
import { OtherDetailsI } from 'appRedux/types/userRequisitionTypes';

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	otherDetails?: OtherDetailsI;
}

const ConfimSubmissionModal: React.FC<Props> = ({
	visible,
	setVisible,
	otherDetails,
}) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const {
		userReq_ProjectInfo,
		productStorageItems,
		serviceDetail,
	} = useSelector((state: RootStore) => state.userRequisition);

	const handleOk = async () => {
		const requisition = {
			project_info: userReq_ProjectInfo,
			products: productStorageItems,
			service: serviceDetail,
			otherDetails,
			status: 'Opened' as 'Opened',
		};

		await dispatch(createRequisition(requisition));
		setVisible(false);
		history.push('/app/tech-procurement/user-requisition');
	};

	const handleCancel = () => {
		setVisible(false);
	};

	return (
		<Modal
			// style={{ padding: '2rem' }}
			bodyStyle={{
				padding: '2em',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '200px',
			}}
			visible={visible}
			width={600}
			closable={false}
			footer={[
				<Row style={{ padding: '1rem 0.5rem' }} justify='space-between'>
					<Col span={10}>
						<button
							className='site-btn-danger'
							key='back'
							onClick={handleCancel}>
							Cancel
						</button>
					</Col>
					<Col span={10}>
						<Button className='btn-xlg' key='submit' onClick={handleOk}>
							Submit
						</Button>
					</Col>
				</Row>,
			]}>
			<strong className='word-break word-wrap text-center'>
				Submitting this requisition means that it will be sent for approval, you
				can check the User Requisition history for status, Click Cancel to
				review form before Submission.
			</strong>
		</Modal>
	);
};

export default ConfimSubmissionModal;
