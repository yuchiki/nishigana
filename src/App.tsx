import React, {useState} from 'react';
import './App.css';
import Keyboard from './Keyboard'
import TextInput from './TextInput'

const vowelLetters: [string, string][][] = [
  [['a', 'A'], ['á', 'Á']],
  [['i', 'I'], ['í', 'Í']]
];

const consonantLetters: [string, string][][] = [
  [['k', 'K']],
  [['s', 'S'], ['š', 'Š']]
];

const AllLetters: [string, string][][] = vowelLetters.concat(consonantLetters);

const letterSelector = (key: string, isCapitalized: boolean, isDiacritized: boolean): string => {
  const serieses = AllLetters.filter(series=> series[0][0] === key.toLowerCase())
  if (serieses.length === 0) return "";

  const series = serieses[0];
  const pair =
    isDiacritized && series.length >= 2 ? series[1] : series[0];

  return isCapitalized ? pair[1] : pair[0];
}


function App() {
  const [text, setText] = useState("");
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);
  const [isCapital, setIsCapital] = useState(false);
  const [isDiacritized, setIsDiacritized] = useState(false);

  const appender = (letter: string) => {setText(text + letter)};

  return (
    <div className="App">
      <div>ctrl for diacritics</div>
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
          letterSelector={letterSelector}
        />
      </div>
      <Keyboard
        vowelLetters={vowelLetters}
        consonantLetters={consonantLetters}
        isInputOnFocus={isInputOnFocus}
        isDiacritized={isDiacritized}
        isCapital={isCapital}
        appender={appender}
      />
    </div>
  );
}

export default App;
