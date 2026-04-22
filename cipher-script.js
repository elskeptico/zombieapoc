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
let newText = '';
const shift = 3;

const cipher = Math.floor(Math.random() * 3);

for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Accessing the letter directly
        if (alphabet.includes(char.toUpperCase())) { 
            const position = alphabet.indexOf(char.toUpperCase());
            const newPosition = (position + shift)%26;
            newText += alphabet[newPosition]
        }
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

}

if (cipher = 2) {

}