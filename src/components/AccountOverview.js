import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

function AccountOverview({ currentUser, setCurrentUser }) {
  return (
    <div className="accountOverview">
      <Deposit currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Withdraw currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default AccountOverview;
