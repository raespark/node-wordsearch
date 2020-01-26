import React from 'react';
import randomWords from 'random-words';

import './list.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    const list = randomWords({exactly: 10, maxLength: 10, formatter: (word) => word.toUpperCase()});
    console.log(list);

    this.state = {
      wordList: list
    };
  }

  render() {
    return (
      <div className="word-list">
        {this.state.wordList.map((word) => (
            <div className="word">
              {word}
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
