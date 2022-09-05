import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-700 h-13 flex justify-between rounded-t-lg items-center p-3 sticky top-0  z-10`,
  navClicked: `bg-gray-700 h-13 flex justify-between rounded-lg items-center p-3 sticky top-0  z-10`,
  heading: `text-white text-md`,
};
const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={user?`${style.nav}`:`${style.navClicked}`}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
