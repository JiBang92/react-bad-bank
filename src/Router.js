import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Account from "./components/Account";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import AllData from "./components/AllData";
import AccountOverview from "./components/AccountOverview";

function Router({
  users,
  setUsers,
  currentUser,
  setCurrentUser,
  signedIn,
  setSignedIn,
}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Account"
        element={
          <Account
            users={users}
            setUsers={setUsers}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route path="/CreateAccount/" element={<CreateAccount />} />
      <Route
        path="/Login/"
        element={<Login signedIn={signedIn} setSignedIn={setSignedIn} />}
      />
      <Route
        path="/AccountOverview/"
        element={
          <AccountOverview
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        }
      />
      <Route path="/Deposit/" element={<Deposit />} />
      <Route path="/Withdraw/" element={<Withdraw />} />
      <Route path="/AllData/" element={<AllData users={users} />} />
    </Routes>
  );
}

export default Router;
