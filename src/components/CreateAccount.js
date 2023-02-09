import { useState } from "react";

function CreateAccount({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [usernameAlert, setUsernameAlert] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    users.filter((user) => {
      if (user.username === username) {
        setUsernameAlert("Username Already In Use");
        return;
      } else if (user.username !== username) {
        const newUser = {
          id: users.length - 1,
          name: name,
          email: email,
          username: username,
          password: password,
          address: {
            street: address,
            city: city,
            state: state,
            zip: zip,
          },
        };

        setUsers([...users, newUser]);
        return newUser;
      }
    });
  }

  return (
    <div className="createAccount">
      <h1>General Details</h1>
      <hr />
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="inputState"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <h1>Account Details</h1>
        <hr />
        <div className="col-md-6">
          <label htmlFor="inputUsername4" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div style={{ color: "red", marginLeft: "10px" }}>
            {usernameAlert}
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div style={{ color: "red" }}>
            {password === ""
              ? ""
              : password.length < 6
              ? "Password Must Be At Least 6 Characters"
              : null}
          </div>
        </div>
        <hr />
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
