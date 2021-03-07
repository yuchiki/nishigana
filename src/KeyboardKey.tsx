import React from 'react';

function KeyboardKey(props: {letter: string, onClick:(letter: string)=>()=>void }) {
  return (
    <button onClick={props.onClick(props.letter)}>{props.letter}</button>
  );
}

export default KeyboardKey;
