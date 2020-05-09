import React from "react";
import "./Auth.css"
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

function Signup() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn,
        } = context.state;

        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/home" />
            ) : (
              <>
                <form onSubmit={handleSignupSubmit}>
                  <label htmlFor="username">
                    Username:
                    <br/>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={handleSignupInput}
                    />
                    <br/>
                  </label>
                  <label htmlFor="email">
                    Email:
                    <br/>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleSignupInput}
                    />
                    <br/>
                  </label>
                  <label htmlFor="password">
                    Password:
                    <br/>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleSignupInput}
                    />
                    <br/>
                  </label>
                  <button>Signup</button>
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

export default Signup;
