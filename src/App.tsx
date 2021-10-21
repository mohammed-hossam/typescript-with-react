import React, { Component } from 'react';
import FunctionTest from './components/FunctionTest';
import ClassTest from './components/ClassTest';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <ClassTest color="red" />
        <FunctionTest color="blue" />
        <Todos />
      </div>
    );
  }
}
export default App;
