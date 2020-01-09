import firebase from 'firebase'

// API details

const firebaseConfig = {
  apiKey: 'AIzaSyBWNk37f5TeL6zO9ItQmrrLDzdcfqErQ1E',
  authDomain: 'instaclone-e7510.firebaseapp.com',
  databaseURL: 'https://instaclone-e7510.firebaseio.com',
  projectId: 'instaclone-e7510',
  storageBucket: 'instaclone-e7510.appspot.com',
  messagingSenderId: '862131023088',
  appId: '1:862131023088:web:068ee7f9d3cf914b506635',
  measurementId: 'G-B9NZG63KYD'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const f = firebase
export const database = firebase.database()
export const auth = firebase.auth()
export const storage = firebase.storage()
