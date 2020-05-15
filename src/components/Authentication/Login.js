import React from "react";
import "./Auth.css";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

function Login() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formLogin: { email, password },
          // message,
          isLoggedIn,
        } = context.state;

        console.log({ email, password });

        const { handleLoginInput, handleLoginSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <>
                <h4>LOG IN</h4>
                <form onSubmit={handleLoginSubmit}>
                  <label htmlFor="email">
                    Email:
                    <br />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleLoginInput}
                    />
                    <br />
                  </label>
                  <label htmlFor="password">
                    Password:
                    <br />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleLoginInput}
                    />
                    <br />
                  </label>
                  <button>Login</button>
                </form>
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Login;
