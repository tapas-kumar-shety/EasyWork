import React, { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      
      <form onSubmit={handleSubmit}>
        <h1><i>Sign in</i></h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
       required />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter Your Password"

          onChange={(e) => setPassword(e.target.value)}
        required/>
        <div className="remember-forget">
          <label ><input type="checkbox"/>Remember me</label>
          <a href="#">Forget Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="http://localhost:5173/register">Register</a></p>
        </div>
        {error && error}
      </form>
    </div>
  );
}

export default Login;