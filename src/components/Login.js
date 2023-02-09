import { useState } from "react";
import Card from "./Card";
import Success from "./Success";
import AccountOverview from "./AccountOverview";

function Login({ users, currentUser, setCurrentUser, signedIn, setSignedIn }) {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (usernameValue === "" && passwordValue !== "") {
      setAlert("Please Enter A Username");
    } else if (passwordValue === "" && usernameValue !== "") {
      setAlert("Please Enter A Password");
    } else if (usernameValue === "" && passwordValue === "") {
      setAlert("Please Enter Your Credentials");
    } else {
      setAlert("");
    }

    users.map((user) => {
      if (user.username === usernameValue) {
        setCurrentUser(user);
        console.log(`Current User: ${currentUser.name}`);
        return user;
      }
    });
    clearForm();
  }

  const clearForm = () => {
    setUsernameValue("");
    setPasswordValue("");
    setSuccess(true);
    setSignedIn(true);
  };

  return (
    <>
      {signedIn ? (
        <AccountOverview />
      ) : (
        <div className="login">
          {success ? (
            <Success currentUser={currentUser} />
          ) : (
            <div className="login-card">
              <Card
                header="Please Enter Your Credentials"
                body={
                  <form onSubmit={onSubmit}>
                    <div style={{ fontWeight: "bold", color: "red" }}>
                      {alert}
                    </div>
                    <div className="row g-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          value={usernameValue}
                          onChange={(e) => setUsernameValue(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          value={passwordValue}
                          onChange={(e) => setPasswordValue(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                  </form>
                }
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Login;
