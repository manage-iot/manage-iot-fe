import React, { useState }  from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function Accounts() {
  const classes = useStyles();

  const [accounts] = useState([{
    id: 'Id1',
    name: 'Name1'
  }]);
  
  return (
    <div className="content">
      <h1>Accounts</h1>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map(row => (
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

export default Accounts