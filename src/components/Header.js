import React from 'react';
import Accounts from './Accounts';
import Devices from './Devices';
import Home from './Home';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Switch } from 'react-router';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
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
};

function Header(props) {
  const { classes } = props;

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
          <Route path="/" exact component={Home} />
          <Route path="/devices" exact  component={Devices} />
          <Route path="/accounts" exact  component={Accounts} />
        </Switch>
      </div>
    </Router> 
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);