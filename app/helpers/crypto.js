const crypto = require("crypto");
const bcrypt = require('bcrypt');
const { error } = require("console");
const bcryptSaltRounds = 10;

// 32 bit encryption key
const ENC_KEY = process.env.AES_SECRET.slice(0, 32);
// 16 bit initialization vector
const IV = process.env.AES_IV.slice(0, 16);

const aesEncrypt = ( (input) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
    let encrypted = cipher.update(input, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
});

const aesDecrypt = ( (encrypted) => {
    let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
});

const bcryptHash = (async (input) => {
    return await bcrypt.hash(input, bcryptSaltRounds);
});



module.exports = {
    aesEncrypt,
    aesDecrypt,
    bcryptHash
}