import React from 'react';
import classes from './KeyboardKey.module.css'

function KeyboardKey(props: {
  small: string,
  capital: string,
  isCapital: boolean,
  isEmphasized: boolean,
  isDisEmphasized: boolean,
  appender:(letter: string)=>void
}) {
  const currentLetter = props.isCapital ? props.capital : props.small;
  return (
    <button
      className={`${
        props.isEmphasized ? classes.emphasized :
        props.isDisEmphasized ? classes.disemphasized : ""}
        ${classes.key}`}
      onClick={() => {props.appender(currentLetter); console.log(currentLetter)}}
    >
        {props.isEmphasized ? <b>{currentLetter}</b> : currentLetter}
      </button>
  );
}

export default KeyboardKey;
