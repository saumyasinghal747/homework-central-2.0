import firebase from "firebase/app";
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/database";
firebase.initializeApp({
    apiKey: "AIzaSyDjLQAzre_M7puZsitnnXhu7uH6M-JIerc",
    authDomain: "homeworkcentral.firebaseapp.com",
    databaseURL: "https://homeworkcentral.firebaseio.com",
    projectId: "homeworkcentral",
    storageBucket: "homeworkcentral.appspot.com",
    messagingSenderId: "709390643857",
    appId: "1:709390643857:web:7ee7ad222cf5f2ba9f4530"
})

export const database = firebase.database()



