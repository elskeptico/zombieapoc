const ciphers = ['caesar', 'atbash'];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Strings work like arrays here!

let org_text = 'THEWORLDISAWHEELANDWEAREALLPEGS';
const shift = 3;

const cipher = ciphers[Math.floor(Math.random() * ciphers.length)];

function caesar(text) {
    let result = '';
    for (let char of text) {
        const position = alphabet.indexOf(char.toUpperCase());
        if (position !== -1) {
            const newPosition = (position + shift) % 26;
            result += alphabet[newPosition];
        }
    }
    return result;
}

function atbash(text) {
    const reversedAlphabet = alphabet.split('').reverse().join('');
    let result = '';
    for (let char of text) {
        const index = alphabet.indexOf(char.toUpperCase());
        result += (index !== -1) ? reversedAlphabet[index] : char;
    }
    return result;
}

// Fixed the comparison operator and variable naming
if (cipher === 'caesar') {
    document.getElementById("cipher1").innerHTML = "caesar";
    document.getElementById("cipher2").innerHTML = "atbash";
    // This applies atbash THEN caesar
    document.getElementById("text").innerHTML = caesar(atbash(org_text));
} else {
    document.getElementById("cipher1").innerHTML = "atbash";
    document.getElementById("cipher2").innerHTML = "caesar";
    // This applies caesar THEN atbash
    document.getElementById("text").innerHTML = atbash(caesar(org_text));
}