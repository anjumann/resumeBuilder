import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi4Qjg4dvYXGEJU25lGzPyifOF2o_QWp0",
  authDomain: "ihacka-thon.firebaseapp.com",
  projectId: "ihacka-thon",
  storageBucket: "ihacka-thon.appspot.com",
  messagingSenderId: "826374880357",
  appId: "1:826374880357:web:9a58109c7b72abae2cda8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export const providerGithub = new GithubAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function getUserInfo(uid) {
  if (uid) {
    const members = [];
    const membersRef = collection(db, 'users');
    const q = query(membersRef, where('uid', '==', uid));
    const participantDocRef = await getDocs(q);
    participantDocRef.forEach((participant) => {
      members.push(participant.data());
    });
    return members[0];
  } else {
    throw new Error('No user logged in');
  }
}


