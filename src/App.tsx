import React, {useState} from 'react';
import './App.css';
import Keyboard from './Keyboard'
import TextInput from './TextInput'

function App() {
  const [text, setText] = useState("");
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);
  const [isCapital, setIsCapital] = useState(false);
  const [isDiacritized, setIsDiacritized] = useState(false);

  const appender = (letter: string) => {setText(text + letter)};

  return (
    <div className="App">
      <div>altKey for diacritics</div>
      <div>{isDiacritized}</div>
      <div>
        <TextInput
          setText={setText}
          text={text}
          isCapital={isCapital}
          setIsCapital={setIsCapital}
          setIsInputOnFocus={setIsInputOnFocus}
          isDiacritized={isDiacritized}
          setIsDiacritized={setIsDiacritized}
          appender={appender}
        />
      </div>
      <Keyboard
        isInputOnFocus={isInputOnFocus}
        isDiacritized={isDiacritized}
        isCapital={isCapital}
        appender={appender}
      />
    </div>
  );
}

export default App;
