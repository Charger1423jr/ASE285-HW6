const mongoose = require('mongoose');
const { User } = require('../src/db');
const { hash } = require('../src/utility');
require('dotenv').config();

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI); //Make a .env and store database file
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("MongoDB User Schema", () => {
    beforeEach(async () => {
        await User.deleteMany();
    });

    test("Should save and retrieve a user with hashed password", async () => {
        const email = "test@example.com";
        const plainPassword = "mytestpass";
        const hashedPassword = hash(plainPassword);

        await User.create({ email, passwordHash: hashedPassword });

        const user = await User.findOne({ email });
        expect(user).not.toBeNull();
        expect(user.passwordHash).toBe(hashedPassword);
    });

    test("Should not find non-existent user", async () => {
        const user = await User.findOne({ email: "nonexistent@example.com" });
        expect(user).toBeNull();
    });
});
