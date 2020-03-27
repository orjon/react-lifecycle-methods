import React from 'react';
import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Lifecycle Methods
        </h2>
        <p>
          [open console: Cmd+Option+J]
        </p>
        <ol>
          <li><code>constructor(props)&#123;...&#125;</code></li>
          <li><code>render()&#123;...&#125;</code></li>
          <li><code>componentDidMount()&#123;...&#125;</code></li>
      </ol>
      </header>
      <div className="App-body">
        <Timer />
        <br></br>
        <ZenQuote />
      </div>
    </div>
  );
}

export default App;
