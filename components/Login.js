import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-black min-h-screen'>
      <Image
        src='https://rb.gy/ogau5a'
        width={150}
        height={150}
        objectFit='contain'
        alt='Twitter Clone'
      />
      <div>
        {/* // returning an array of objects that contains the Providers  that we passed in fom next-auth so that we can map through, we want to map through our providers we passed from the home page as props and convert them into an array "Object.values()" so that we then return a div.  need to provide a key when you map.
         */}
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {/* https://www.devdojo.com/tailwindcss/buttons#_ */}
            <button
              className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'
              onClick={
                () =>
                  signIn(provider.id, {
                    callbackUrl: '/'
                  }) // CallbackUrl is where you want the page to route after a successful login.
              }
            >
              <span className='w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
              <span className='relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Login
