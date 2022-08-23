import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon
} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc
} from '@firebase/firestore'
import { getDownloadURL, ref, uploadString } from '@firebase/storage'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

function Input() {
  const { data: session } = useSession()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)
  const sendPost = async () => {
    if (loading) return
    setLoading(true)

    const docRef = await addDoc(collection(db, 'posts'), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp()
    })

    const imageRef = ref(storage, `posts/${docRef.id}/image`)

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL
        })
      })
    }

    setLoading(false)
    setInput('')
    setSelectedFile(null)
    setShowEmojis(false)
  }

  // here we are accepting an event. We'll have a reader. Adding image to our posts. 'FileReader()' is from javascript - it lets web applications asynchronously read the contents of files (or raw data) stored on the user's computer. we'll select the file with the if statement, then it'll read your data as a url. Then send in the blob(e.target.file) to the storage.
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    // the reader.onload that will accept a reader event and then set the selectedFile to the reader.result which is basically the url of the image.
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const addEmoji = (e) => {
    // @ts-ignore
    const sym = e.unified.split('-')
    const codesArray = []

    sym.forEach((el) => codesArray.push('0x' + el))
    // @ts-ignore
    const emoji = String.fromCodePoint(...codesArray)

    setInput(input + emoji)
  }

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll items-center scrollbar-hide ${
        loading && 'opacity-60'
      }`}
    >
      <Image
        src={session.user.image}
        alt=''
        height='60px'
        width='60px'
        className='rounded-full xl:mr-2.5 h-11'
      />
      <div className='divide-y divide-gray-700 w-full'>
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's Poppin?"
            rows='2'
            className='bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]'
          />

          {selectedFile && (
            <div className='relative'>
              <div
                className='absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer'
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className='text-white h-5' />
              </div>
              <img
                src={selectedFile}
                alt=''
                className='rounded-2xl max-h-80 object-contain'
              />
            </div>
          )}
        </div>
        {/* if loading is NOT true then we'll show the file picker div. */}
        {!loading && (
          <div className='flex items-center justify-between pt-2.5'>
            <div className='flex items-center justify-center space-x-2'>
              <div
                className='icon'
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className='text-[#1d9bf0] h-[22px]' />
                <input
                  type='file'
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>

              <div className='icon rotate-90'>
                <ChartBarIcon className='text-[#1d9bf0] h-[22px]' />
              </div>

              <div className='icon' onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className='text-[#1d9bf0] h-[22px]' />
              </div>

              <div className='icon'>
                <CalendarIcon className='text-[#1d9bf0] h-[22px]' />
              </div>

              {showEmojis && (
                <Picker
                  data={data}
                  onEmojiSelect={addEmoji}
                  style={{}}
                  className='emoji-picker'
                  theme='dark'
                />
              )}
            </div>
            <button
              className='bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default'
              disabled={!input && !selectedFile}
              onClick={sendPost}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
