const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
];

function getUsersOlderThan(age) {
    // Reason: Use filter for clarity and performance instead of a manual loop
    return users.filter(user => user.age > age); // Reason: Simplifies code by using higher-order functions
}

const olderUsers = getUsersOlderThan(29);
console.log(olderUsers); // Reason: Logging output to verify the function's correctness