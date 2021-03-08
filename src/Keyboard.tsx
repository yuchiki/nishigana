import React from 'react';
import classes from './Keyboard.module.css'
import KeySet from "./KeySet";

function Keyboard(props: {
  vowelLetters: [string, string][][],
  consonantLetters: [string, string][][],
  isCapital:  boolean,
  appender: (letter: string) => void,
}) {
  return (
    <div className={classes.Keyboard}>
      <KeySet
        letterTuples={props.vowelLetters}
        isCapital={props.isCapital}
        appender={props.appender}
      />

      <KeySet
        letterTuples={props.consonantLetters}
        isCapital={props.isCapital}
        appender={props.appender}
      />
    </div>
  );
}

export default Keyboard;
