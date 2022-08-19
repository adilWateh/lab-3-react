
import './App.css';
import WordCard from './WordCard';

const words = ['hello', 'school', 'morning', 'eye', 'noob'];

function App() {
  return (
    <div>
      <WordCard value={words[Math.round(Math.random() * words.length)]} />
    </div>

  );
}

export default App;
