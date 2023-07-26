import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD7Ky78B4ddWsxecLyeJkxWCbW4E3Ce0Gs",
    authDomain: "projeto-58-cf59c.firebaseapp.com",
    databaseURL: "https://projeto-58-cf59c-default-rtdb.firebaseio.com",
    projectId: "projeto-58-cf59c",
    storageBucket: "projeto-58-cf59c.appspot.com",
    messagingSenderId: "648105617059",
    appId: "1:648105617059:web:bd4698fa3900f4c4820116"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();