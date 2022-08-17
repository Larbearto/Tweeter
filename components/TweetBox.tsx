import {
	CalendarIcon,
	EmojiHappyIcon,
	LocationMarkerIcon,
	PhotographIcon,
	SearchCircleIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

function TweetBox() {
	return (
		<div className='flex space-x-2 p-5'>
			<Image
				src='https://links.papareact.com/gll'
				alt=''
				width={75}
				height={75}
				className='mt-4 object-contain rounded-full'
			/>

			<div className='flex flex-1 items-center pl-2 '>
				<form className='flex flex-1 flex-col'>
					<input
						type='text'
						placeholder="What's Happening"
						className='h-24 w-full text-xl outline-none'
					/>
					<div className='flex items-center'>
						<div className='flex flex-1 space-x-2 text-twitter'>
							<PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
							<SearchCircleIcon className='h-5 w-5' />
							<EmojiHappyIcon className='h-5 w-5' />
							<CalendarIcon className='h-5 w-5' />
							<LocationMarkerIcon className='h-5 w-5' />
						</div>
						<button className='bg-twitter px-5 py-2 font-bold text-white rounded-full '>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
export default TweetBox
