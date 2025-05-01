# Password Verification System - User Manual

## Overview
This program is intended to take passwords in a file, encrypt them and store them into another file, 
and test if the encryption process worked.

## Files and Their Purpose
- password.txt: A file containing some demo emails and passwords. Can replace them and store your own values
- makepassword.js: Takes password.txt and encrypts all the passwords in the file, storing them in aother file
- password.enc.txt: Stores the encrypted password values in the same format as password.txt
- passwordjs.js: Command-line tool that will verify if the encryption outcome evaluates to the original values
- utility.js: Functions that are used by makepassword.js and passwordjs.js to read and write the files needed
- acceptance.bat: The Script that will test the authentication behavior; Modify this if you input your own values into password.txt
- makepassword.test.js: A testing environment to see if the makepassword.js code works without completing the whole function
- passwordjs.test.js: A testing environment to see if the passwordjs.js code works without completing the whole function

## Requirements
1. Install Node.js
2. Create a MongoDB database and link the cluster in a file named '.env' (Use .env.example' for reference)

## Operation
### Run Tests
1. In your terminal, enter `npm test`
2. Wait for the test to complete, and see the outcome of the two files. If both pass, test was successful.

### Generate Encrypted Passwords
1. In your terminal, `cd` to the location of the files.
2. run command `node src/makepassword.js` to take input of password.txt. This information will be sent to your created MongoDB Cluster, if linked properly.
Expected Output: `Data uploaded to MongoDB.`

### Verify Credentials
1. For a single email check, run `node src/passwordjs.js <encFile> <email> <password>` (Example: `node src/passwordjs.js password.enc.txt sm.cho@hello.com 123456`)
Expected Output: `true`
3. For full file testing, run command `./acceptance.bat`. This will run through all the commands posted. Currently, it will return 10 `true` and 4 `false`
