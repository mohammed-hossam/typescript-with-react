import React from 'react';
interface AppProps {
  color: string;
}

function FunctionTest(props: AppProps): JSX.Element {
  return <div>{props.color}</div>;
}

export default FunctionTest;
