import React from 'react';

import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import { Switch } from 'react-router';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import Accounts from './Accounts';
import Devices from './Devices';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuLink: {
    textDecoration: 'none',
    color: 'white',
    paddingRight: '25px'
  },
  active: {
    color: 'red'
  }
});

function Header(props) {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <NavLink to="/" activeClassName="active-home" className={classes.menuLink}><HomeIcon /></NavLink>
            </IconButton>
            
            <NavLink to="/accounts" className= {classes.menuLink}>Accounts</NavLink>
            <NavLink to="/devices" className={classes.menuLink}>Devices</NavLink>
          </Toolbar>
        </AppBar>
        
        <Switch>
          <Redirect exact from="/" to="accounts" />
          <Route path="/devices" exact  component={Devices} />
          <Route path="/accounts" exact  component={Accounts} />
        </Switch>
      </div>
    </Router> 
  );
}

export default Header;