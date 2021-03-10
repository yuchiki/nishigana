import React, { useEffect, useRef } from 'react';
import classes from './TextInput.module.css';
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
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(()=> textAreaRef?.current?.focus());

  return (
    <textarea
      ref={textAreaRef}
      className={classes.textinput}
      rows={10}
      cols={200}
      spellCheck={false}
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
