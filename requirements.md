# Requirements:

There is a file named password.txt. This file contains emails and passwords for users on a webpage. This file needs to be encrypted to password.enc.txt. Then, it will need to be uploaded into a MongoDB database by using Mongoose.

When you enter in an email and password, if the two are a match in the database, it should return true. If they are not a match, something is not present in the database, or if there is missing data in the entry, it should return false.
