import { links } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import SideBarItem from './SideBarItem'



export default function SideBar() {


	return (
		<div className='w-3/12 bg-white px-10 py-20 h-screen'>
			<div className='flex items-center justify-center'>
				<Image
					src="/images/logo.svg"
					alt="Cuacane Logo"
					width={0} // Set appropriate width
					height={0} // Set appropriate height
					className='w-14 h-14'
				/>
				<h3 className='text-main-black text-3xl font-semibold ml-5'>Cuacane</h3>
			</div>
			<nav>
				<ul className='space-y-4 mt-20'>
					{links.map((link) => (
						<li key={link.link}>
							<SideBarItem text={link.text} link={link.link} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
