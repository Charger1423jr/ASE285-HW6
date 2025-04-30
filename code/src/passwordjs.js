'use strict'
const fs = require('fs');
const { readFile, hash } = require('./utility');

function passwordjs() {
    if (process.argv.length !== 5) return 'false';

    const filename = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];

    if (!fs.existsSync(filename)) return 'false';

    const lines = readFile(filename);
    const passwordHash = hash(password);

    for (let line of lines) {
        const [storedEmail, storedHash] = line.split(":");
        if (email === storedEmail && passwordHash === storedHash) {
            return 'true';
        }
    }
    return 'false';
}

if (require.main === module) {
    console.log(passwordjs());
}

module.exports = { passwordjs };
