// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDeREnfn21yjg4rwgwpo4TQbJJU5-CZT1Q',
  authDomain: 'tweeter-5568e.firebaseapp.com',
  projectId: 'tweeter-5568e',
  storageBucket: 'tweeter-5568e.appspot.com',
  messagingSenderId: '385337412116',
  appId: '1:385337412116:web:5d855d4e4aa895f2f03501'
}

// Initialize Firebase //next js config
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
