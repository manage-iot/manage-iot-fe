import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700
  },
  textCenter: {
    textAlign: 'center'
  }
});

function Accounts() {
  const classes = useStyles();

  const [accounts, setAccounts] = useState([]);
  const [isAccountsLoading, setIsAccountsLoading] = useState(true);
  const [isAccountsLoadingError, setIsAccountsLoadingError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://reqres.in/api/users`,
        {
          method: "GET"
        }
      )
      .then(res => res.json())
      .then(response => {
        setAccounts(response.data);
        setIsAccountsLoading(false);
      })
      .catch(error => {
        setIsAccountsLoadingError(true);
        setIsAccountsLoading(false);
        console.log(error);
      });
    }, 2000);  
  }, []);

  return (
    <div className="content">
      <h1 className = {classes.textCenter}>Accounts</h1>

      {isAccountsLoading && 
        <p className = {classes.textCenter}>
          <LinearProgress color="secondary" />
        </p>
      }

      {!isAccountsLoading && accounts.length > 0 &&
        <Paper className={classes.root}>
          <Table className={classes.table}  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" >
                    {row.id}
                  </TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      }

    {isAccountsLoadingError && <p>Error Loading Accounts</p>}
    </div>
  );
}

export default Accounts