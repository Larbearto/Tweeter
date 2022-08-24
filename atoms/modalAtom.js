import { atom } from 'recoil'

// allows you to use state globally

export const modalState = atom({
  key: 'modalState',
  default: false
})

export const postIdState = atom({
  key: 'postIdState',
  default: ''
})
