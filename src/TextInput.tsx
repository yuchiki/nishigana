import React from 'react';

function TextInput(props: {
  text: string,
  setText: (text:string) => void
  setIsCapital: (b: boolean) => void
}) {
  return (
    <textarea
      rows={20}
      cols={200}
      onChange={e=> props.setText(e.target.value)}
      onKeyDown={e => {
          if (e.shiftKey) {
            props.setIsCapital(true)
          }
        }
      }
      onKeyUp={e => {
          if (e.key === 'Shift') {
            props.setIsCapital(false);
          }
        }
      }
      onBlur={e => {
          props.setIsCapital(false);
        }
      }
      value={props.text}
    />
  );
}

export default TextInput;
