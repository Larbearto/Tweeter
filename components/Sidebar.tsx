import Image from 'next/image'
import SidebarRow from './SidebarRow'
import {
	HashtagIcon,
	HomeIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	ClipboardListIcon,
	MailIcon,
	UserIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	DotsHorizontalIcon,
} from '@heroicons/react/outline'

function Sidebar() {
	return (
		<div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
			<Image
				className='m-3 h-10 w-10'
				src='https://links.papareact.com/drq/'
				alt='Twitter'
				width={50}
				height={50}
			/>

			<SidebarRow Icon={HomeIcon} title='Home' />
			<SidebarRow Icon={HashtagIcon} title='Explore' />
			<SidebarRow Icon={BellIcon} title='Notifications' />
			<SidebarRow Icon={MailIcon} title='Messages' />
			<SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
			<SidebarRow Icon={CollectionIcon} title='Lists' />
			<SidebarRow Icon={UserIcon} title='Sign In' />

			<SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
		</div>
	)
}
export default Sidebar
