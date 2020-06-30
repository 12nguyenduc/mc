export interface User {
    id: string;
    username: string;
    password: string;
}

const users: Array<User> = [
    {
        id: '1',
        username: 'admin',
        password: '1234'
    },
    {
        id: '2',
        username: 'admin2',
        password: '1234'
    }
]

export default users;
