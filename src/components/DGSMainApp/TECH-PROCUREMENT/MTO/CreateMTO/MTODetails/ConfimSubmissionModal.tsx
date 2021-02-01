import React from 'react';
import { Modal, Button, Row, Col } from 'antd';

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfimSubmissionModal: React.FC<Props> = ({ visible, setVisible }) => {
	const handleOk = () => {
		setVisible(false);
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
			width={500}
			closable={false}
			footer={[
				<Row gutter={50} justify='space-between'>
					<Col span={8}>
						<button
							className='site-btn-danger'
							key='back'
							onClick={handleCancel}>
							Cancel
						</button>
					</Col>
					<Col span={8}>
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
