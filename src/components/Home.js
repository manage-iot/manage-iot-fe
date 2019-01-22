import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    display: 'inline-block',
    textAlign: 'center',
    height: 62,
    width: 300,
    marginRight: 30
  },
  media: {
    height: 140,
  },
};

function Home(props) {
  const { classes } = props;
  return (
    <div className="content">
      <h2>Go to: </h2>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Accounts
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Devices
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)