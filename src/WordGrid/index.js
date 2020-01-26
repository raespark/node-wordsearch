import React from 'react';
import './grid.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordGrid: []
    };
  }
  render() {
    return (
      <div className="word-grid">
        {'WORD GRID GOES HERE'}
      </div>
    );
  }
}

export default App;
