import React from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

function Login() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formLogin: { email, password },
          message,
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
                <h2>Login form</h2>
                <form onSubmit={handleLoginSubmit}>
                  <label htmlFor="email">
                    Email:
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleLoginInput}
                    />
                  </label>
                  <label htmlFor="password">
                    Password:
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleLoginInput}
                    />
                  </label>
                  <button>Login</button>
                </form>
                {/* {message ? <div>{message}</div> : ''} */}
                {message && <div>{message}</div>}
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Login;
