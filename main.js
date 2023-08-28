const lib = require('./fieldGenarate');
const prompt = require('prompt-sync')({sigint: true});

const stop = '🚫';
const pathCharacter = '🚀';
const Gas = '⛽️';
class Field {
    constructor(field, userPosition) {
        this._field = field;
        this._userPosition = userPosition;
    }

    print() {
        console.log (this._field.map(row => row.join('')).join('\n'));
    }

    moveUp() {
        return 
    }

    move() {
        let userState = false;
        let [row, col] = this._userPosition

        while(!userState) {
            let userMove = prompt('Which way ? ')

            if (userMove === 't' && row === 0 || userMove === 'd' && row === 9 || userMove === 'l' && col === 0 || userMove === 'r' && col === 9) {
                console.log('You Out Of Map.')
                userState = true
            }

            if (userMove === 't' && row !== 0 ) {
                row--;
                if (this._field[row][col] === stop || row > 9) {
                    console.log(`You lose.`);
                    userState = true;
                } else if (this._field[row][col] === Gas) {
                    console.log(`You win.`);
                    userState = true;
                } else {
                    this._field[row][col] = pathCharacter;
                    this.print();
                }
                
            } else if (userMove === 'd' && row !== 9) {
                row++;
                if (this._field[row][col] === stop) {
                    console.log(`You lose.`);
                    userState = true;
                } else if (this._field[row][col] === Gas) {
                    console.log(`You win.`);
                    userState = true;
                } else {
                    this._field[row][col] = pathCharacter;
                    this.print();
                }

            } else if (userMove === 'l' &&  col !== 0) {
                col--;
                if (this._field[row][col] === stop) {
                    console.log(`You lose.`);
                    userState = true;
                } else if (this._field[row][col] === Gas) {
                    console.log(`You win.`);
                    userState = true;
                } else {
                    this._field[row][col] = pathCharacter;
                    this.print();
                }

            } else if (userMove === 'r' && col !== 9) {
                col++;
                if (this._field[row][col] === stop) {
                    console.log(`You lose.`);
                    userState = true;
                } else if (this._field[row][col] === Gas) {
                    console.log(`You win.`);
                    userState = true;
                } else {
                    this._field[row][col] = pathCharacter;
                    this.print();
                }
           
            } else if (userMove === 'q') {
                console.log(`Bye Kid.`)
                userState = true;
            }
        }
    }
}

const [FieldEnvironment, UserPosition] = lib.mapGenarator();

const myField_0 = new Field(FieldEnvironment, UserPosition)

myField_0.print()
myField_0.move()
