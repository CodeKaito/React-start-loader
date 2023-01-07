import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
      <header className="App-header">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" />
        </svg>
      </header>
      :
      <div>
        <h1>Hello</h1>
      </div>
      }
    </div>
  );
}

export default App;
