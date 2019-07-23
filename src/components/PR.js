import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '47%',
    height: '47%',
    margin: '0.4rem'
  },
  media: {
    height: 140,
  },
};

class PR extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Card raised className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require('../assets/images/plank.jpg')}
            title="test"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.exercise}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`${this.props.reps} total reps`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PR);