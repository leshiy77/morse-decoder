const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resultString = [];
    let newString = expr.split('**********');
    for (let i = 0; i < newString.length; i++) {
        let str = newString[i];
        let word = [];
        for (let j = 0; j < str.length; j+= 10) {
            let elemStr = str.slice(j, j + 10);
            let elemStrNum = +elemStr;
            let keyString = [];
            while (elemStrNum != 0) {
                if (elemStrNum % 100 === 10) {
                    keyString.unshift('.');
                } else {
                    keyString.unshift('-');
                }
                elemStrNum = Math.floor(elemStrNum / 100);
            }
            word += MORSE_TABLE[keyString.join('')];
        }
        resultString.push(word);
    }
    return resultString.join(' ');
}   

module.exports = {
    decode
}