import React from 'react';
interface AppProps {
  color: string;
}

function Test(props: AppProps): JSX.Element {
  return <div>{props.color}</div>;
}

export default Test;
