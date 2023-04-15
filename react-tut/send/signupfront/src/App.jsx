import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullName = () => {};
  const handleUserName = () => {};
  const handleEmail = () => {};
  const handlePassword = () => {};

  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                className="form-control form-group"
                type="text"
                onChange={handleFullName}
                placeholder="Full Name"
                value={fullName}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                className="form-control form-group"
                type="text"
                onChange={handleUserName}
                placeholder="Username"
                value={userName}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                className="form-control form-group"
                type="email"
                onChange={handleEmail}
                placeholder="Email address"
                value={email}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                className="form-control form-group"
                type="password"
                onChange={handlePassword}
                placeholder="Password"
                value={password}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              value="Submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
