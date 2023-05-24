let users = [
    {
        id: 1,
        username: 'Amin',
        password: 1010,
    },
    {
        id: 2,
        username: 'Amir',
        password: 0000,
    },
    {
        id: 1,
        username: 'Ali',
        password: 1122,
    },
]

let jsonData = '[{"id":1,"username":"Amin","password":1010},{"id":2,"username":"Amir","password":0},{"id":1,"username":"Ali","password":1122}]'

console.log(JSON.parse(jsonData));