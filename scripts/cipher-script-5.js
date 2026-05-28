const ciphers = ['caesar', 'atbash'];

const alphabet = [
  'A','B','C','D','E','F',
  'G','H','I','J','K','L',
  'M','N','O','P','Q','R',
  'S','T','U','V','W','X',
  'Y','Z'
];

let org_text = 'YOUNGINNOCENTDAPPERANDBRIGHTYELLOW';
const shift = 3;

const cipher = ciphers[Math.floor(Math.random() * ciphers.length)];

function caesar(text) {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (alphabet.includes(char.toUpperCase())) { 
            const position = alphabet.indexOf(char.toUpperCase());
            const newPosition = (position + shift)%26;
            newText += alphabet[newPosition]
        }   
    }
    return newText;
}

function atbash(text) {
    let alphabet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let newText = '';
    for (i = 0; i < text.length; i++) {
        let coded_letter = text.charAt(i);
        let letter_index = alphabet2.indexOf(coded_letter);
        let decoded_letter = tebahpla.charAt(letter_index);
        newText += decoded_letter;
    }
    return newText;
}

if (cipher === 'caesar') {
    document.getElementById("cipher1").innerHTML = "atbash";
    document.getElementById("cipher2").innerHTML = "caesar";
    document.getElementById("text").innerHTML = caesar(atbash(org_text));
} else {
    document.getElementById("cipher1").innerHTML = "caesar";
    document.getElementById("cipher2").innerHTML = "atbash";
    document.getElementById("text").innerHTML = atbash(caesar(org_text));
}