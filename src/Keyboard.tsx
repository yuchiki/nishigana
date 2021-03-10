import React from 'react';
import classes from './Keyboard.module.css'
import KeySet from "./KeySet";
import { VowelLetters, ConsonantLetters } from "./LetterInfo";

function Keyboard(props: {
  isInputOnFocus: boolean,
  isDiacritized: boolean,
  isCapital:  boolean,
  appender: (letter: string) => void,
}) {
  return (
    <div className={classes.Keyboard}>
      <KeySet
        letterTuples={VowelLetters}
        isInputOnFocus={props.isInputOnFocus}
        isDiacritized={props.isDiacritized}
        isCapital={props.isCapital}
        appender={props.appender}
      />

      <KeySet
        letterTuples={ConsonantLetters}
        isInputOnFocus={props.isInputOnFocus}
        isDiacritized={props.isDiacritized}
        isCapital={props.isCapital}
        appender={props.appender}
      />
    </div>
  );
}

export default Keyboard;
