import React from 'react';

function TextInput(props: {
  text: string,
  setText: (text:string) => void,
  setIsInputOnFocus: (b:boolean) => void,
  isCapital: boolean,
  setIsCapital: (b: boolean) => void,
  isDiacritized: boolean,
  setIsDiacritized: (b: boolean) => void,
  appender: (letter: string) => void,
  letterSelector: (key: string, isCapitalized: boolean, isDiacritized: boolean) => string,
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
          if (e.ctrlKey) {
            props.setIsDiacritized(true)
          }

          if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
            const letter = props.letterSelector(e.key, props.isCapital, props.isDiacritized);
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
          if (e.key === 'Control') {
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
