import Card from "./Card";

function AllData({ users }) {
  return (
    <div className="allData">
      <div className="allData-card">
        {users.map((user, index) => {
          if (user.name !== "") {
            return (
              <Card
                key={index}
                header={<h1>{user.name}</h1>}
                body={
                  <>
                    <div className="general-info">
                      <h3>
                        <b>Username:</b>
                      </h3>
                      <p>{user.username}</p>
                      <h3>
                        <b>Email:</b>
                      </h3>
                      <p>{user.email}</p>
                      <h3>
                        <b>Password:</b>
                      </h3>
                      <p>{user.password}</p>
                      <h3>
                        <b>Address:</b>
                      </h3>
                      <p>
                        {user.address.street}
                        <br />
                        {user.address.city}
                        <br />
                        {user.address.state}
                        <br />
                        {user.address.zip}
                      </p>
                    </div>
                  </>
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default AllData;
