import Card from "./Card";
import bankIcon from "../icons/bank-icon.png";

function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <Card
          header={
            <>
              <h1>Welcome!</h1>
              <h3>We're Happy To See You</h3>
            </>
          }
          body={<img src={bankIcon} alt="Bank Icon" />}
        />
      </div>
    </div>
  );
}

export default Home;
