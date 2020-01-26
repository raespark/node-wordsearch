import React from 'react';
import './grid.css';

class App extends React.Component {
  generateRandomGrid(h, w) {
    let grid = []
    let gridRow = []
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characterLength = characters.length;
    for (let y = 0; y < h; y++) {
      gridRow = [];
      for (let x = 0; x < w; x++) {
        gridRow[x] = characters.charAt(Math.floor(Math.random() * characterLength));
      }
      grid[y] = gridRow;
    }
    return grid;
  }

  constructor(props) {
    super(props);

    const grid = this.generateRandomGrid(20, 20);

    this.state = {
      wordGrid: grid
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
