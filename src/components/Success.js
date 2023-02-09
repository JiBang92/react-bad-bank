import { Link } from "react-router-dom";
import AccountOverview from "./AccountOverview";
import Card from "./Card";

function Success({ currentUser }) {
  return (
    <Card
      header="Success!"
      title={`Welcome Back, ${currentUser.name}!`}
      body={
        <button>
          <Link to="/AccountOverview/" element={AccountOverview}>
            Proceed To Account Overview
          </Link>
        </button>
      }
    />
  );
}

export default Success;
