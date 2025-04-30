'use strict'
const fs = require('fs');
const { readFile, writeFile, hash } = require('./utility');
const { User } = require('./db');

function toHash(line) {
    const [email, password] = line.split(":");
    if (!email || !password) return null;
    return `${email}:${hash(password)}`;
}

function makepassword(passwordFileName, passwordEncFileName) {
    const lines = readFile(passwordFileName);
    const hashedLines = lines
        .map(line => toHash(line))
        .filter(line => line !== null);
    writeFile(hashedLines, passwordEncFileName);
    uploadToDB(hashedLines).then(() => {
        console.log("Data uploaded to MongoDB.");
        process.exit();
    });
    
}

async function uploadToDB(hashedLines) {
    await User.deleteMany();
    for (let line of hashedLines) {
        const [email, passwordHash] = line.split(':');
        await User.create({ email, passwordHash });
    }
}

if (require.main === module) {
    makepassword('password.txt', 'password.enc.txt');
}

module.exports = { makepassword, toHash };
