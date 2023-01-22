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
    let result = ""; let a = ""; let a1 = ""; let a2 = ""; let exprS = ""; let expr1 = ""; let expr2 = ""; let i = 0; let x1 = 0; let x2 = 0; 
    for (i=0; i < (expr.length / 10); i++) {
        expr1 = "";
        x1 = 10*i; x2 = x1 + 10;
        a = expr.slice(x1, x2);
        if (a != "**********") {
        a1 = a.replaceAll("11", "-");
        a2 = a1.replaceAll("10", ".");
        exprS = a2.replaceAll("00", "");
        expr1 = MORSE_TABLE[exprS];
        } else {expr1 = " "}
        expr2 = expr2 + expr1;
    }
    result = expr2;
    return result;
}
module.exports = {
    decode
}
