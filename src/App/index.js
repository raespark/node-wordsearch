import React from 'react';
import WordGrid from '../WordGrid';
import WordList from '../WordList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: []
    };
  }
  render() {
    return (
      <div className="App">
        <WordGrid/>
        <WordList/>
      </div>
    );
  }
}

export default App;
