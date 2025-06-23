const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
];

function getUsersOlderThan(age) {
    const result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > age) {
            result.push(users[i]);
        }
    }
    return result;
}

const olderUsers = getUsersOlderThan(29);
console.log(olderUsers);