import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button 
      type="button" 
      style={{backgroundColor: buttonColor}} 
      onClick={() => setButtonColor(newButtonColor)}
      disabled={disabled}
      >
        Change to {newButtonColor}
      </button>

      <input 
      type="checkbox"
      id="enable-button-checkbox" 
      onChange={(e) => setDisabled(e.target.checked)} 
      checked={disabled}
      />
    </div>
  );
}

export default App;
