import React from 'react';
import Accounts from './Accounts';
import Devices from './Devices';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    paddingRight: '10px'
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
              <MenuIcon />
            </IconButton>
            <NavLink to="/devices" className={classes.menuLink}>Devices</NavLink>
            <NavLink to="/accounts" className= {classes.menuLink}>Accounts</NavLink>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        
        <Route path="/devices" component={Devices} />
        <Route path="/accounts" component={Accounts} />
      </div>
    </Router> 
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Header);