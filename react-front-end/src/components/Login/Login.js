import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const classes = useStyles();

  const loginUser = async () => {
    const response = await axios.post("http://localhost:8000/api/auth/signin", {
      email: email,
      password: password,
    });
    return response;
  };

  console.log("here");

  //submit login form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    console.log("landlord", response.data.is_landlord);
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
          <label>
            <p>Email</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
