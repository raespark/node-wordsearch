import React from 'react';
import randomWords from 'random-words';

import WordGrid from '../WordGrid';
import WordList from '../WordList';
import placeWords from '../utils/PlaceWords';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const list = randomWords({exactly: 10, maxLength: 10, formatter: (word) => word.toUpperCase()});
    const grid = placeWords(list, 20, 20);

    this.state = {
      wordList: list,
      grid: grid
    };
  }
  render() {

    console.log(this.state.wordList);
    return (
      <div className="App">
        <div className = "body">
          <WordGrid grid={this.state.grid}/>
          <WordList list={this.state.wordList}/>
        </div>
      </div>
    );
  }
}

export default App;
