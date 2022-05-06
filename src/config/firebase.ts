import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCM68MVlzP9hiQDBPW37mNe5UVbIc3E48E",
  authDomain: "exemplo-autenticacao-dbe9e.firebaseapp.com",
  projectId: "exemplo-autenticacao-dbe9e",
  storageBucket: "exemplo-autenticacao-dbe9e.appspot.com",
  messagingSenderId: "221441053084",
  appId: "1:221441053084:web:895a5db727319aab26b859"
};

export const firebaseApp = initializeApp(firebaseConfig)
