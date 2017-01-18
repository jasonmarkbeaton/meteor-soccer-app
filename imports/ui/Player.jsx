import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Jason Beaton" subtitle="Offense: 12 - Defense: 8" />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball Manipulation
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Kicking Abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                3
              </Avatar>
              Passing Abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Duel/Tackling Abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Field Speed Coverage
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Blocking Abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Game Strategy
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Playmaking Risk
            </Chip>
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
