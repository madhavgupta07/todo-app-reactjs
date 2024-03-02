import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAksmNsvPCkQJXLxuNlHAnc72et3vs1O_E",
  authDomain: "todo-dcb4c.firebaseapp.com",
  databaseURL: "https://todo-dcb4c-default-rtdb.firebaseio.com",
  projectId: "todo-dcb4c",
  storageBucket: "todo-dcb4c.appspot.com",
  messagingSenderId: "481818341719",
  appId: "1:481818341719:web:92a0301954c17048d70e12"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();