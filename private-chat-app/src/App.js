import "./App.css";

//firebase sdk
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//firebase hooks
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { signOut } from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBXx6X0ucKE_m-jpDIDDw6i0TKIWy_btaQ",
  authDomain: "eypprivatechatapp.firebaseapp.com",
  projectId: "eypprivatechatapp",
  storageBucket: "eypprivatechatapp.appspot.com",
  messagingSenderId: "341919202570",
  appId: "1:341919202570:web:d53857161ffe2c4c0f8ef3",
  measurementId: "G-K3RZ1SPXBM",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
