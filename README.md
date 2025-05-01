# Password Encryption Tester
# Introduction:
**To Encrypt data containing the emails and passwords of a webpage to keep the secure. Also to implement an information tester, seeing if the information matches each other.**

## Schedule:
### Plan:
#### Week 1 (Due April 11th):
1. Produce a password.txt containing information of 10 emails and passwords
2. Encrypt password.txt using createpassword.js
3. Store data into MongoDB
#### Week 2 (April 18th):
4. Finish Node.js/JavaScript Application to allow entry of information that tests if information matches
5. Implement a true and false return for the data entered, presenting result in the console.
#### Week 3+ (May 7th):
6. Insure that data is reporting correctly and fix any bugs
#### Submittion (May 1st)

LoC: 
- April 11th - 64 Lines (Template)
- April 12th - 101 Lines (Finished db.js and makepassword.js)
- April 14th - 112 Lines (Finished passwordjs.js)

Burndown Rate: 
- April 11th - Produced my 10 emails and passwords and entered them into `password.txt`
- April 12th - Develop `createpassword.js` so it encrypts the passwords in `password.txt` and creates new file `password.enc.txt`
- April 12th - Create MongoDB Database collection for assignment. Test Integrations so far and ensure database is properly connected.
- April 14th - Develop `passwordjs.js` so that it tests the encrypted passwords to see if they match the stored passwords.
- April 15-May 1st - Check over and perform bug fixes. Upload all files to Github for Submission.

Test Coverage: 
- April 12th - `password.txt` encrypted through `createpassword.js` properly and the email with hashed password was stored in MongoDB database
- April 14th - Test `passwordjs.js` to ensure it is reading the files properly and relaying correct responses.
