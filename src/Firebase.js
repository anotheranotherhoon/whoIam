import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const firebase = initializeApp(firebaseConfig);

const fireStore = getFirestore(firebase);

const initData = async (data) => {
    data.map(async(el,idx) => {
        // console.log(el, idx)
        const dataRef = doc(fireStore, "myExp");
        console.log(dataRef)
        await addDoc(dataRef,{...el, createdAt: Date.now()})
    });
};


export { fireStore, initData};