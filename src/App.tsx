import React, {useState} from 'react';
import './App.css';
import KeyboardKey from './KeyboardKey'
import TextInput from './TextInput'

function App() {
  const [text, setText] = useState("");


  const appender = (letter: string) => () => {setText(text + letter)};

  return (
    <div>
      <div>
        <TextInput
          setText={setText}
          text={text}
        />
      </div>
    <KeyboardKey
      letter="dhsjkh"
      onClick={appender}
    ></KeyboardKey>
    </div>
  );
}

export default App;
