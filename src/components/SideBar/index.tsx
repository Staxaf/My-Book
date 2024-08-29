import { links } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'



export default function SideBar() {


	return (
		<div className='w-3/12 bg-white px-10 py-20 h-screen'>
			<div className='flex items-center justify-center'>
				<Image
					src="/images/logo.svg"
					alt="Babuk Logo"
					width={50} // Set appropriate width
					height={50} // Set appropriate height
				/>
				<h3 className='text-main-black text-3xl font-semibold ml-5'>Babuk</h3>
			</div>
			<nav>
				<ul className='space-y-4 mt-20'>
					{links.map((link) => (
						<li key={link.link}>
							<a
								href={link.link}
								className='text-main-black text-xl font-medium hover:text-blue-600 transition-colors duration-200'
							>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
