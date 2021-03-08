import React from 'react';
import classes from './KeySet.module.css'
import KeySeries from "./KeySeries";

function KeySet(props: {
  letterTuples: [string, string][][],
  isCapital:  boolean,
  appender: (letter: string) => void,
}) {
  return (
    <div className={classes.KeySet}>
      {props.letterTuples.map(letterTuple=>
        <KeySeries
          key={letterTuple[0][0]}
          letters={letterTuple}
          isCapital={props.isCapital}
          appender={props.appender}
        />
      )}
    </div>
  );
}

export default KeySet;
