import React, { SVGProps } from 'react'

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
	title: string
}

// pass the props the type with a colon.
// desctructure the props by breaking it with curlies.
function SidebarRow({ Icon, title }: Props) {
	return (
		<div className='group flex max-w-fit px-4 items-center space-x-2 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 m-3'>
			<Icon className='h-6 w-6' />
			<p className='hidden md:inline-flex md:text-lg text-white lg:text-xl group-hover:text-twitter font-light'>
				{title}
			</p>
		</div>
	)
}
export default SidebarRow
