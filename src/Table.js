import React from 'react';
import Luncher from './Luncher';

class Table extends React.Component {
  constructor() {
    // props that will go to parent class (TablesContainer)
    super();
    // initial state: no Lunchers.
    this.state = {
      data: []
    };
  }
  
  // render markup
  render(){
    return (
      // TODO
      <dl>
      <dt>Table #...</dt>
    <Luncher />
    </dl>
    )
  }
}
module.exports = Table;