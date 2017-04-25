import React from 'react';
import Table from './Table';
import './TablesContainer.css';

class TablesContainer extends React.Component {
  constructor(props) {
    super(props);
    // initial state: no Tables.
    this.state = {
      tables: [],
      lunchers: ['ABC']
    };
    this.generateTables = this.generateTables.bind(this);
    this.getLunchers = this.getLunchers.bind(this);
    this.addLuncher = this.addLuncher.bind(this);
  }

  componentDidMount() {
    // get all current lunchers as potential lunch peeps
    this.getLunchers();
  }

  generateTables() {
    // TODO
    // generate Tables from this.state.lunchers
  }

  getLunchers() {
    return this.state.lunchers;
  }

  addLuncher(e) {
    // take form input value, and add string to lunchers array
    e.preventDefault();
    let currentLunchers = this.getLunchers();
    currentLunchers.push(this.refs.luncherInput.value);
    this.setState({ lunchers: currentLunchers });
  }

  render() {
    // the HTML sent to render in App.js
    return (
      <div>
        
      {/* button to generate today's Lunch Peeps */}
        <button onClick={this.generateTables}>Generate your Lunch Peeps</button>
        <Table />
      {/* form to add new person to Lunchers array */}
        <form onSubmit={ this.addLuncher }>
          <label>Add a new luncher</label>
          <input placeholder="Luncher name" ref="luncherInput" />
          <input type="submit" value="Add new luncher" />
        </form>
      </div>
    )
  }

}

module.exports = TablesContainer;