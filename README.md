# Password Encryption Tester
# Introduction:
**To Encrypt data containing the emails and passwords of a webpage to keep the secure. Also to implement an information tester, seeing if the information matches each other.**

## Requirements
1. I want to store upwards of 10 passwords and ensure that all of the passwords will be encrypted for protection in hash format stored in a file named password.enc.txt. These email/password combinations should originate from password.txt.
2. I want this information to be stored in a MongoDB database by use of Mongoose.
3. I want a tester that will return a Boolean true or false value based on the email and/or password entered. It should return true if the email is present in the database and the password entered matches the decrypted value. If an email is not present in the file or the password does not match the email, or if no password was entered, return false.

## Design
### Tools
- JavaScript/Node.js - Main Code
- MongoDB & Mongoose - Database
- WebStorm IDE - Coding Environment
- GitHub - File Storage & Upload of Documentation

### Code
Data Stored (Unencrypted): password.txt
Template Skeleton Code: passwordjs template
makepassword.js --> Encrypt Passwords in file
passwordjs.js --> Checks values and prints out 'true' or 'false'
utility.js --> Main Functions used in other files
Data Stored (Encrypted): password.enc.txt
## Schedule:

### Plan:
#### Week 1 (Due April 11th):
1. Produce a password.txt containing information
2. Encrypt password.txt
3. Store data into MongoDB
#### Week 2 (April 18th):
4. Create a Node.js/JavaScript Application to allow entry of information that tests if information matches
5. Implement a true and false return for the data entered, presenting result in the console.
#### Week 3+ (May 7th):
6. Insure that data is reporting correctly and fix any bugs
#### Submittion (May 1st)

LoC: 

Burndown Rate: 

Test Coverage: 
