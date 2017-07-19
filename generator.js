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

const generateRecords = () => {
    fs.writeFile('./json/users.json', createUsers(100), (err, data) => {
        if (err) return console.log(err);
        console.log('File created!');
    });
}

generateRecords();