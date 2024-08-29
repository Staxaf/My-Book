import Link from 'next/link';
import React from 'react'

type SideBarItemProps = {
	icon: React.ReactNode; // This can be an SVG component or any React node
	text: string;
	link: string;
};


const SideBarItem: React.FC<SideBarItemProps> = ({ icon, text, link }) => {
	return (
		<Link href={link} passHref>
			<a className="sidebar-item">
				<div className="icon">{icon}</div>
				<span className="text">{text}</span>
			</a>
		</Link>
	);
};

export default SideBarItem;