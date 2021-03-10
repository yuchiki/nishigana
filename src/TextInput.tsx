import React from 'react';
import { LetterSelector } from "./LetterInfo";

function TextInput(props: {
  text: string,
  setText: (text:string) => void,
  setIsInputOnFocus: (b:boolean) => void,
  isCapital: boolean,
  setIsCapital: (b: boolean) => void,
  isDiacritized: boolean,
  setIsDiacritized: (b: boolean) => void,
  appender: (letter: string) => void,
}) {
  return (
    <textarea
      rows={20}
      cols={200}
      onFocus={e=> props.setIsInputOnFocus(true)}
      onChange={e=> props.setText(e.target.value)}
      onKeyDown={e => {
          if (e.shiftKey) {
            props.setIsCapital(true)
          }

          if (e.altKey) {
            props.setIsDiacritized(true)
          }

          if (/Key[A-Z]/.test(e.code)) {
            const letter = LetterSelector(e.code.slice(-1), props.isCapital, props.isDiacritized);
            if (letter !== "") {
              e.preventDefault();
              props.appender(letter);
            }
          }
        }
      }
      onKeyUp={e => {
          if (e.key === 'Shift') {
            props.setIsCapital(false);
          }
          if (e.key === 'Alt') {
            props.setIsDiacritized(false);
          }
        }
      }
      onBlur={e => {
          props.setIsInputOnFocus(false);
          props.setIsCapital(false);
          props.setIsDiacritized(false);
        }
      }
      value={props.text}
    />
  );
}

export default TextInput;
