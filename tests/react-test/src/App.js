import { useEffect } from 'react';
import './App.css';

import "jpage/lib/index.css"
import("jpage/lib/index.js")

function App() {
  useEffect(() => {
    window.jpageConfig = {} // Object to configure JPage
  }, [])
  return (
    <div className="App">
      <div className="jpage">
        <div className="section" style={{ backgroundColor: "gray" }}></div>
        <div className="section">
          <div className="slider">
            <div className="slide" style={{ backgroundColor: "black" }}></div>
            <div className="slide" style={{ backgroundColor: "blue" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
