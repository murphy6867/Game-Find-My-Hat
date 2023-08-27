const genarateField = require('./fieldGenarate');

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    print() {
        console.log (this._field)
    }
}
 
const myField_0 = new Field(genarateField.FieldEnvironment)

myField_0.print()