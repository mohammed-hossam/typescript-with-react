import React, { Component } from 'react';
import Test from './components/Test';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome color="red" />
        <Test color="blue" />
      </div>
    );
  }
}
export default App;
