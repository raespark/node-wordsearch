import React from 'react';
import './grid.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      wordGrid: props.grid
    };
  }

  render() {
    return (
      <div className="word-grid">
        <table>
          <tbody>
            {this.state.wordGrid.map((row, y) =>
              (
                <tr key={y} className="grid-row">
                  {
                    (row.map((letter, x) =>
                      <td key={x} className="grid-letter">{letter}</td>
                    ))
                  }
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
