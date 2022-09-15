import './app.css';
import {useState,React} from 'react';
import ThreadList from './components/ThreadList';




function App() {
  return (
  
    <div>
      
    <div className='Headder'>
    <div className='homeText'>
    HOME / PAGE 
    </div>
  </div>

  <div className="mainFrame">
  <div>
      
      <ThreadList/>
    
  </div>

  </div>
  
    </div>
  );
}

export default App;
