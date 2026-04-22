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
let newText;

const cipher = Math.floor(Math.random() * 3);

if (cipher = 0) {

    function encrypt(char) {
        const shift = Number(form.shift.value);
        if (alphabet.includes(char.toUpperCase())) { 
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position + shift)%26;
        return alphabet[newPosition] 
        }
    else { return char }
    }



    text = text.map(char => encrypt(char)).join('');
}

if (cipher = 1) {

}

if (cipher = 2) {

}