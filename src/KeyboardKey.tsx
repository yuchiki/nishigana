import React from 'react';

function KeyboardKey(props: {
  small: string,
  capital: string,
  isCapital: boolean,
  appender:(letter: string)=>void
}) {
  const currentLetter = props.isCapital ? props.capital : props.small;
  return (
    <button onClick={() => {props.appender(currentLetter); console.log(currentLetter)}}>{currentLetter}</button>
  );
}

export default KeyboardKey;
