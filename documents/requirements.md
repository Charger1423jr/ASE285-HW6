# Requirements:

1. I want to store upwards of 10 passwords and ensure that all of the passwords will be encrypted for protection in hash format stored in a file named password.enc.txt. These email/password combinations should originate from password.txt.

2. I want this information to be stored in a MongoDB database by use of Mongoose.

3. I want a tester that will return a Boolean true or false value based on the email and/or password entered. It should return true if the email is present in the database and the password entered matches the decrypted value. If an email is not present in the file or the password does not match the email, or if no password was entered, return false.
