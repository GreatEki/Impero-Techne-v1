import React from 'react';
import * as MdIcon from 'react-icons/md';
// import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
	{
		title: 'Dashboard',
		path: '/app',
		iconPath: '/icons/Mask Group 8.svg',
		iconClosed: <MdIcon.MdKeyboardArrowLeft />,
		iconOpen: <MdIcon.MdKeyboardArrowDown />,
	},
	{
		title: 'Activities Menu',
		path: '/app/activities-menu',
		iconPath: '/icons/list.svg',
		iconClosed: <MdIcon.MdKeyboardArrowLeft />,
		iconOpen: <MdIcon.MdKeyboardArrowDown />,
	},
	{
		title: 'Tech Procurement',
		path: '/app/tech-procurement',
		iconPath: '/icons/tech_procurement.svg',
		iconClosed: <MdIcon.MdKeyboardArrowLeft />,
		iconOpen: <MdIcon.MdKeyboardArrowDown />,
		subNav: [
			{
				title: 'MTO',
				path: '/app/tech-procurement/mto',
			},
			{
				title: 'User Requisition',
				path: '/app/tech-procurement/user-requisition',
			},
			{
				title: 'Justification of Award',
				path: '/app/tech-procurement/justification-of-award',
			},
			{
				title: 'Contract Award',
				path: '/app/tech-procurement/contract-award',
			},
			{
				title: 'Project Milestone',
				path: '/app/tech-procurement/project-milestone',
			},
		],
	},
	{
		title: 'Reports',
		path: '/app/reports',
		iconPath: '/icons/reports.svg',
		iconClosed: <MdIcon.MdKeyboardArrowLeft />,
		iconOpen: <MdIcon.MdKeyboardArrowDown />,
		subNav: [
			{
				title: 'Daily Reports',
				path: '/app/reports/daily-reports',
			},
			{
				title: 'Construction Reports',
				path: '/app/reports/contstruction-reports',
			},
			{
				title: 'Non Confirmance Report',
				path: '/app/reports/non-confirmance-reports',
			},
		],
	},
	{
		title: 'Admin',
		path: '/app/admin',
		iconPath: '/icons/admin.svg',
		iconClosed: <MdIcon.MdKeyboardArrowLeft />,
		iconOpen: <MdIcon.MdKeyboardArrowDown />,
		subNav: [
			{
				title: 'Register A User',
				path: '/app/reports/register-user',
			},
		],
	},
];
