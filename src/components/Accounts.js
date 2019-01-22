import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Accounts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      accounts: [{
        id: 'Id1',
        name: 'Name1'
      }]
    };
    this.classes = props.classes;
  }

  render() {
    return (
      <div className="content">
        <h1>Accounts</h1>

        <Paper className={this.classes.root}>
          <Table className={this.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell >Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.accounts.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" >
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}


Accounts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accounts);