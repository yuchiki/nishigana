import React from 'react';

function TextInput(props: {
  text: string,
  setText: (text:string) => void
}) {
  return (
    <textarea
      onChange={(e)=> props.setText(e.target.value)}
      value={props.text}
    />
  );
}

export default TextInput;
