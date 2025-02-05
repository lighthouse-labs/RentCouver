import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const loginUser = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/signin", {
      email: email,
      password: password,
    });
    return response;
  };

  //submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    setToken(
      response.data.accessToken,
      response.data.id,
      response.data.is_landlord
      );
      history.push(`/user/${response.data.id}`);
      window.location.reload();

  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <Paper className="form-paper" elevation={3}>
        <form onSubmit={handleSubmit}>
          <div className="form-textbox">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-textbox">
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="button primary-btn login-button">Submit</button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};


// example1@lhl.com