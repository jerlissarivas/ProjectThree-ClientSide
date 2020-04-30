import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "typeface-roboto";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h3" className={classes.title}>
                Trip Planner
              </Typography>
              {context.state.isLoggedIn ? (
                <>
                  <Link to="/home">
                    <Button variant="outlined">Home</Button>
                  </Link>
                  <Link to="/Logout">
                    <Button variant="outlined">Log Out</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/Login">
                    <Button variant="outlined">Login</Button>
                  </Link>
                  <Link to="/Signup">
                    <Button variant="outlined">Sign Up</Button>
                  </Link>
                </>
              )}
            </Toolbar>
          </AppBar>
        </div>
      )}
    </AuthContext.Consumer>
  );
}
