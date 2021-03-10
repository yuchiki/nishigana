import React from 'react';
import classes from './KeySeries.module.css'
import KeyboardKey from "./KeyboardKey";

function KeySeries(props: {
  letters: [string, string][],
  isInputOnFocus: boolean,
  isDiactitized: boolean,
  isCapital:  boolean,
  appender: (letter: string) => void,
}) {
  return (
    <div className={classes.KeySeries}>
      {props.letters.map((pair, i) =>
        <KeyboardKey
          key={pair[0]}
          small={pair[0]}
          capital={pair[1]}
          isCapital={props.isCapital}
          isEmphasized={
            props.isInputOnFocus &&
              ((!props.isDiactitized && i === 0) || (props.isDiactitized && i !== 0))
          }
          isDisEmphasized={
            props.isInputOnFocus &&
              !((!props.isDiactitized && i === 0) || (props.isDiactitized && i !== 0))
          }
          appender={props.appender}
        />
      )}
    </div>
  );
}

export default KeySeries;
