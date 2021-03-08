import React from 'react';
import classes from './KeySeries.module.css'
import KeyboardKey from "./KeyboardKey";

function KeySeries(props: {
  letters: [string, string][]
  isCapital:  boolean
  appender: (letter: string) => void
}) {
  return (
    <div className={classes.KeySeries}>
      {props.letters.map(pair =>
        <KeyboardKey
          key={pair[0]}
          small={pair[0]}
          capital={pair[1]}
          isCapital={props.isCapital}
          appender={props.appender}
        />
      )}
    </div>
  );
}

export default KeySeries;
