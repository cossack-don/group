// VUEFIRE START

import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'test-11126' })
  .firestore()
// VUERIFRE END