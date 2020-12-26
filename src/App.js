import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  render() {
    const name = 'Prasanna';
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? <h3>Loading. . . .</h3> : <h1>Hello {name}</h1> }
      </div>
    );
  }
  
}

export default App;
