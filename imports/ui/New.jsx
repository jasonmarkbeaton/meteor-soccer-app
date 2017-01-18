import React, { Component } from 'react';


export default class New extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
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
              <select ref="Ball Manipulation" type="ballManipulation" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select ref="Kicking Abilities" type="kickingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Passing Abilities</h5>
              <select ref="Passing Abilities" type="passingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel Tackling</h5>
              <select ref="Duel Tackling" type="duelTackling" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Field Coverage</h5>
              <select ref="Field Coverage" type="fieldCoverage" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blockiing Abilities</h5>
              <select ref="Blocking Abilities" type="blockingAbilities" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Game Strategy</h5>
              <select ref="Game Strategy" type="gameStrategy" className="browser-default">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill required</option>
                <option value="3">3 - Great skills</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking Risks</h5>
              <select ref="Playmaking Risks" type="playmakingRisks" className="browser-default">
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
              <button className="btn waves-effect vaes-light" type="submit" name="action">Submit <i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}