import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

interface Props {
	current: number;
}
const StepIndex: React.FC<Props> = ({ current }) => {
	const steps = ['1', '2', '3'];
	return (
		<div>
			<Steps current={current}>
				{steps.map((step) => (
					<>
						<Step key={step} title={step} />
					</>
				))}
			</Steps>
		</div>
	);
};

export default StepIndex;
