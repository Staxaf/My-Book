import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type SideBarItemProps = {
	// icon: React.ReactNode; // This can be an SVG component or any React node
	text: string;
	link: string;
};


const SideBarItem: React.FC<SideBarItemProps> = ({ text, link }) => {
	return (
		<Link href={link} passHref className="flex items-center sidebar-item">
			<Image
				src="/images/sidebar/dashboard.svg"
				alt="Babuk Logo"
				width={30} // Set appropriate width
				height={30} // Set appropriate height
				className='mr-3'
			/>
			{/* <div className="icon">{icon}</div> */}
			<span className="text">{text}</span>
		</Link>
	);
};

export default SideBarItem;