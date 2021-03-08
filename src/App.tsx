import React, {useState} from 'react';
import './App.css';
import Keyboard from './Keyboard'
import TextInput from './TextInput'

function App() {
  const [text, setText] = useState("");
  const [isCapital, setIsCapital] = useState(false);

  const appender = (letter: string) => {setText(text + letter)};

  const vowelLetters: [string, string][][] = [
    [['a', 'A'], ['á', 'Á']],
    [['i', 'I'], ['í', 'Í']]
  ];

  const consonantLetters: [string, string][][] = [
    [['k', 'K']],
    [['s', 'S'], ['š', 'Š']]
  ];

  return (
    <div className="App">
      <div>
        <TextInput
          setText={setText}
          text={text}
          setIsCapital={setIsCapital}
        />
      </div>
      <Keyboard
        vowelLetters={vowelLetters}
        consonantLetters={consonantLetters}
        isCapital={isCapital}
        appender={appender}
      />
    </div>
  );
}

export default App;
