import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Player from './Player';
import TeamStats from './Team-stats';
import TeamList from './Team-list';


export default class App extends Component {
  getPlayers(){
    return [
      {
        _id: 1,
        name: "Jason Beaton",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 2,
        fieldCoverage: 3,
        blockingAbilities: 3,
        gameStrategy: 1,
        plamakingRisks: 3
      },
      {
        _id: 2,
        name: "John Smith",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 2,
        fieldCoverage: 3,
        blockingAbilities: 3,
        gameStrategy: 1,
        plamakingRisks: 3
      },
      {
        _id: 3,
        name: "Bob Moses",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 2,
        fieldCoverage: 3,
        blockingAbilities: 3,
        gameStrategy: 1,
        plamakingRisks: 3
      },
      {
        _id: 4,
        name: "Victor Sanchez",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 2,
        fieldCoverage: 3,
        blockingAbilities: 3,
        gameStrategy: 1,
        plamakingRisks: 3
      }
    ]
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
          title="Soccer App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
