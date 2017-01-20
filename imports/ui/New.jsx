import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from '../api/players';

export default class New extends Component {
  submitPlayer(event){
    event.preventDefault();

    let player = {
      name: this.refs.name.value,
      team: this.refs.team.value,
      ballManipulation: this.refs.ballManipulation.value,
      kickingAbilities: this.refs.kickingAbilities.value,
      passingAbilities: this.refs.passingAbilities.value,
      duelTackling: this.refs.duelTackling.value,
      fieldCoverage: this.refs.fieldCoverage.value,
      blockingAbilities: this.refs.blockingAbilities.value,
      gameStrategy: this.refs.gameStrategy.value,
      playmakingRisks: this.refs.playmakingRisks.value,
      notes:this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('insertPlayer', player, (error) =>{
      if(error){
        alert("something's wrong: " + error.reason);
      } else {
        alert("player added");
        browserHistory.push('/');
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <h3>Add a new player</h3>
          <div className="row">
            <div className="input-field col s6">
              <h5>Name</h5>
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <h5>Team</h5>
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select ref="ballManipulation" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select ref="kickingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Passing Abilities</h5>
              <select ref="passingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel Tackling</h5>
              <select ref="duelTackling" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Field Coverage</h5>
              <select ref="fieldCoverage" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blockiing Abilities</h5>
              <select ref="blockingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Game Strategy</h5>
              <select ref="gameStrategy" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking Risks</h5>
              <select ref="playmakingRisks" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Submit <i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
