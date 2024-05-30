import React, { useContext } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import UserContext from "./contexts/UserContext";

function App() {
  const {user, updateUser} = useContext(UserContext)
  return (
    <>
      <Header />
      <hr />
      { !user ? <LoginForm /> : <button onClick={()=>updateUser('')}>Logout</button>}

    </>
  )
};

export default App;
