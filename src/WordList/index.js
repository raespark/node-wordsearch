import React from 'react';
import randomWords from 'random-words';

import './list.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      wordList: props.list
    };
  }

  render() {
    return (
      <div className="word-list">
        {this.state.wordList.map((word, key) => (
            <div key={key} className="word">
              {word}
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
