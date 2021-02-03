import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Index = () => {
	const [currentPage, setCurrentPage] = useState<number>(0);

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	const prev = () => {
		setCurrentPage(currentPage - 1);
	};

	switch (currentPage) {
		case 0:
			return <ProjectDetails currentPage={currentPage} />;
		default:
			return <ProjectDetails currentPage={currentPage} />;
	}
};

export default Index;
