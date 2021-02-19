import firebase from 'firebase/app'
import 'firebase/auth'

const app=firebase.initializeApp({
    apiKey: "AIzaSyBmcNRDK_WssBIf45_rsM-ar_pnhIL6FKc",
    authDomain: "auth-production-be784.firebaseapp.com",
    projectId: "auth-production-be784",
    storageBucket: "auth-production-be784.appspot.com",
    messagingSenderId: "552701282310",
    appId: "1:552701282310:web:3246dfead89942957edb87"
})

export default app
export const auth=app.auth();