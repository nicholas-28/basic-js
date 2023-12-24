const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message,  key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessage = this.vigenere(message, key, 'encrypt');
    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedMessage = this.vigenere(encryptedMessage, key, 'decrypt');
    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }

  vigenere(text, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(text[i])) {
        let shift = alphabet.indexOf(key[keyIndex % key.length]);
        if (mode === 'decrypt') {
          shift = -shift + alphabet.length;
        }
        result += alphabet[(alphabet.indexOf(text[i]) + shift) % alphabet.length];
        keyIndex++;
      } else {
        result += text[i];
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
