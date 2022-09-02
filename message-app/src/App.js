import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[320px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[85vh] bg-gray-200 mt-10 shadow-xl border rounded-lg relative`,
};

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user && <Chat />}
      </section>
    </div>
  );
};

export default App;
