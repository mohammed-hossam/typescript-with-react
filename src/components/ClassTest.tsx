import React, { Component, Fragment } from 'react';

interface AppProps {
  color: string;
}
interface AppState {
  counter: number;
}
//components has 2 optinal generics with default empty object=> p and s
class ClassTest extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
    this.onIncrement = this.onIncrement.bind(this);
  }
  //   state = { counter: 0 };
  //in js this is equivilant to using constuctor and super, but in ts this is different; as this declaration will override the default that is an empty object for generic <s>.

  onIncrement(): void {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  }
  onDecrement = (): void => {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  };

  render() {
    return (
      <Fragment>
        <div>welcome</div>
        <p>{this.props.color}</p>
        <p>{this.state.counter}</p>
        <button onClick={this.onIncrement}>increase counter</button>
        <button onClick={this.onDecrement}>decrease counter</button>
      </Fragment>
    );
  }
}

export default ClassTest;
