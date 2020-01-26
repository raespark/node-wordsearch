function generateEmptyGrid(h, w) {
  //
  let grid = []
  let gridRow = []
  for (let y = 0; y < h; y++) {
    gridRow = [];
    for (let x = 0; x < w; x++) {
      //0 meaning the space is empty/can be occupied
      gridRow[x] = 0
    }
    grid[y] = gridRow;
  }

  return grid;
}

function fillGrid(grid) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characterLength = characters.length;

  let width = grid[0].length;
  let height = grid.length;

  for (let y = 0; y < height; y ++) {
    for (let x = 0; x < width; x ++) {
      if (!grid[y][x]) {
        grid[y][x] = characters.charAt(Math.floor(Math.random() * characterLength));
      }
    }
  }

  return grid;
}

function placeWords(wordlist, width, height) {
  let i = 0;
  let grid = generateEmptyGrid(height, width);

  placing: while(i < wordlist.length) {
    let word = wordlist[i];

    // start with left -> Right or Up -> down
    // if greater than .5 up -> down otherwise left->right
    // true is for up -> down
    let upDown = Math.random() > 0.5 ? true : false;

    let x;
    let y;

    if(upDown) {
      y = Math.floor(Math.random() * (height - word.length));
      x = Math.floor(Math.random() * width);

      const maxY = y + word.length;

      // Check if word fits
      for(let j = y; j < maxY; j ++) {
        if (grid[j][x]) {
          if(!(word.charAt(j-y) === (grid[j][x]))) {
            //retry - find better non infinite loop possible solution
            continue placing;
          }
        }
      }

      for(let j = y; j < maxY; j++) {
        grid[j][x] = word.charAt(j-y);
      }
      
      i++;
    } else {
      x = Math.floor(Math.random() * (width - word.length));
      y = Math.floor(Math.random() * height);

      const maxX = x + word.length;

      // Check if word fits
      for(let j = x; j < maxX; j ++) {
        if (grid[y][j]) {
          if(!(word.charAt(j-x) === grid[y][j])) {
            //retry - find better non infinite loop possible solution
            continue placing;
          }
        }
      }

      for(let j = x; j < maxX; j ++) {
        grid[y][j] = word.charAt(j-x);
      }

      i++;
    }
  }

  grid = fillGrid(grid);

  return grid;
}

export default placeWords;