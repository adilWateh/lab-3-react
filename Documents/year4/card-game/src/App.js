import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
import { useState } from 'react';

const words = ['hello', 'school', 'morning', 'eye'];
function App() {
  const [word, setWord] = useState(words[Math.round(Math.random() * words.length)])
  
  return (
    <div >
        <WordCard value={word}/>
    </div>

  );
}

export default App;
