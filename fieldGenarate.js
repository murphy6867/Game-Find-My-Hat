// Function Random Index of environment
function randomIndex() {
    const randomNumber = Math.random();
    if (randomNumber < 0.2) {
        return 0; 
    } else {
        return 1; 
    }
}

// Function Random and Check value of User Index and Gas Index
function randomPosition() {
    let stateSame = false;
    let userCol = 0;
    let userRow = 0;
    let gasCol = 0;
    let gasRow = 0;
    let result = [];

    while(!stateSame) {
        userCol = Math.floor(Math.random() * 10);
        userRow = Math.floor(Math.random() * 10);
        gasCol = Math.floor(Math.random() * 10);
        gasRow = Math.floor(Math.random() * 10);

        if (userCol != gasCol && userRow != gasRow) {
            stateSame = true
        }
    }

    return (result = [userRow, userCol, gasRow, gasCol])
}

// Function Genarate Map
function mapGenarator() {
  
  let newMap = [];
  let cols = 10;
  let rows = 10;
  let environments = ['🚫', 'ꈨ'];
  let pathCharacter = '🚀';
  let Gas = '⛽️';

  for (let indexR = 0; indexR < rows; indexR++) {
    
    newMap[indexR] = [];
    
    for (let indexC = 0; indexC < cols; indexC++) {
      newMap[indexR][indexC] = environments[randomIndex()];
    }
  }

  let environmentRandom = randomPosition();
  newMap[environmentRandom[0]][environmentRandom[1]] = pathCharacter;
  newMap[environmentRandom[2]][environmentRandom[3]] = Gas;
  let getUserPosition = [[environmentRandom[0]], [environmentRandom[1]]];

  return [newMap, getUserPosition];
}

module.exports = { mapGenarator };