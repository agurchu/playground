import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const registered = {
      fullName,
      userName,
      email,
      password,
    };

    axios
      .post("http://localhost:8000/api/signup", registered)
      .then((res) => console.log(res.data));

    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                className="form-control form-group"
                type="text"
                onChange={handleFullName}
                placeholder="Full Name"
                value={fullName}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                className="form-control form-group"
                type="text"
                onChange={handleUserName}
                placeholder="Username"
                value={userName}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                className="form-control form-group"
                type="email"
                onChange={handleEmail}
                placeholder="Email address"
                value={email}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control form-group"
                type="password"
                onChange={handlePassword}
                placeholder="Password"
                value={password}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary " value="Submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
