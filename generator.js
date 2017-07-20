const faker = require('faker');
const fs = require('fs');

const createUsers = (num) => {
    let users = [];
    for (let i = 0; i < num; i += 1) {
        users.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            jobTitle: faker.name.jobTitle(),
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber()
        });
    }
    return JSON.stringify(users);
}

const generateUsers = () => {
    // check if users exists
    fs.readFile('./json/users.json', 'utf8', (err, data) => {
        if (err) {
            // create users
            fs.writeFile('./json/users.json', createUsers(100), (err, data) => {
                if (err) return console.log(err);
                console.log('File created!');
            });
            return console.log('Error reading "./json/users.json". New file being created...');
        }
        return console.log('File found! Not duplicated.')
    });
}

generateUsers();