import React from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from 'appRedux/Store';
import { addMto } from 'appRedux/actions/mtoActions';

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfimSubmissionModal: React.FC<Props> = ({ visible, setVisible }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	// Bringing in projectInfo and mtoStorageItems from redux store
	const { projectInfo, mtoStorageItems } = useSelector(
		(state: RootStore) => state.mto
	);

	const handleOk = async () => {
		const newMto = {
			projectInfo,
			addedItems: mtoStorageItems,
			status: 'Opened' as 'Opened',
		};

		await dispatch(addMto(newMto));
		setVisible(false);
		history.push('/app/tech-procurement/mto');
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
			width={550}
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
			<strong>You are about to submit this MTO form approval.</strong>
			<br />
			<strong className='word-break word-wrap text-center'>
				Click 'Submit' to send MTO for approval if not click 'cancel' to close
				modal
			</strong>
		</Modal>
	);
};

export default ConfimSubmissionModal;
