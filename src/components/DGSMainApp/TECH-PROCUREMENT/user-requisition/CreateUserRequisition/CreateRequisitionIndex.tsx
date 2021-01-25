import React, { useState } from 'react';
import RequisitionDetails from '../Requisition-details/RequisitionDetails';
import ProjectDetailForm from './ProjectDetailForm';

const CreateRequisitionIndex = () => {
	const [currentPage, setCurrentPage] = useState<number>(0);

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	switch (currentPage) {
		case 0:
			return <ProjectDetailForm next={next} />;

		case 1:
			return <RequisitionDetails />;

		default:
			return <ProjectDetailForm next={next} />;
	}
};

export default CreateRequisitionIndex;
