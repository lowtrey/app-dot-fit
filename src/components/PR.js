import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../styles/PR.css';

function PR(props) {
  const { exercise, reps } = props;
  return (
    <Card raised className='card'>
      <CardActionArea className='action-area' disableTouchRipple>
        <CardMedia
          title="test"
          className='media'
          image={require(`../assets/images/${exercise}.jpg`)}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {exercise}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${reps} total reps`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PR;