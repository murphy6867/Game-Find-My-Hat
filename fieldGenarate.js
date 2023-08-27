const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const FieldEnvironment = [
    ['*', '░', '░', 'O'],
    ['░', 'O', '░', '*'],
    ['O', '░', '░', 'O'],
    ['^', '░', 'O', '░'],
    ['O', 'O', '░', 'O']
];

module.exports.FieldEnvironment = FieldEnvironment;