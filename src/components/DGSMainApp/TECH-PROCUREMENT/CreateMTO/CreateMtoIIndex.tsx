import React, { useState } from 'react';
import MTOForm from './ProjectDetailsForm';
import MTODetails from './MTODetails/MTODetails';

const CreateMtoIndex = () => {
	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};
	const [currentPage, setCurrentPage] = useState<number>(0);

	switch (currentPage) {
		case 0:
			return <MTOForm next={next} />;
		case 1:
			return <MTODetails />;
		default:
			return <MTOForm next={next} />;
	}
};

export default CreateMtoIndex;
