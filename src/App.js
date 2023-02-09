import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./Router";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "",
      email: "",
      username: "",
      password: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    },
  ]);

  return (
    <>
      <NavBar />
      <Router
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        signedIn={signedIn}
        setsignedIn={setSignedIn}
      />
    </>
  );
}

export default App;
