const ciphers = [
    'ceaser', 'atbash', 'baconian'
];

const alphabet = [
  'A','B','C','D','E','F',
  'G','H','I','J','K','L',
  'M','N','O','P','Q','R',
  'S','T','U','V','W','X',
  'Y','Z'
];

let text = 'theworldisawheelandweareallpegs';
let newText = 'ya';
const shift = 3;

const cipher = Math.floor(Math.random() * 3);

let alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    
for (i = 0; i < text.length; i++) {
    var coded_letter = text.charAt(i);
    var letter_index = alphabet2.indexOf(coded_letter);
    var decoded_letter = tebahpla.charAt(letter_index);
    newText = newText + decoded_letter;
}
alert(newText);

if (cipher = 0) {
    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Accessing the letter directly
        if (alphabet.includes(char.toUpperCase())) { 
            const position = alphabet.indexOf(char.toUpperCase());
            const newPosition = (position + shift)%26;
            newText += alphabet[newPosition]
        }   
    }
    alert(newText);
}

if (cipher = 1) {
    let alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

    for (i = 0; i < message.length; i++) {
        var coded_letter = message.charAt(i);
        var letter_index = alphabet2.indexOf(coded_letter);
        var decoded_letter = tebahpla.charAt(letter_index);
        newText = newText + decoded_letter;
    }
}

if (cipher = 2) {

}