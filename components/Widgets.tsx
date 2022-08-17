import { SearchIcon } from '@heroicons/react/outline'
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widget() {
	return (
		<div className='hidden  lg:inline col-span-2 mt-2 px-2'>
			{/* Search */}
			<div className='flex items-center space-x-2 rounded-full bg-gray-100 p-3'>
				<SearchIcon className='h-5 w-5 text-gray-400' />
				<input
					placeholder='Search Twitter'
					type='text'
					className='flex-1 outline-none bg-transparent'
				/>
			</div>
			<TwitterTimelineEmbed
				sourceType='profile'
				screenName='ElonMusk'
				options={{ height: 400 }}
			/>
		</div>
	)
}

export default Widget
