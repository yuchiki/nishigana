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
      <div>
        <button
          onClick={(e)=>navigator.clipboard.writeText(text)}
        >Copy to Clipboard</button>
      </div>
      <Keyboard
        isInputOnFocus={isInputOnFocus}
        isDiacritized={isDiacritized}
        isCapital={isCapital}
        appender={appender}
      />
      <div>altKey for diacritics</div>
      <div>
        <h1>Known issues</h1>
        <ul>
          <li>textarea上でctrlキーが効かない</li>
          <li>textareaの最後にしか文字が追加できない</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
