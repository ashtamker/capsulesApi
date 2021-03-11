const userApi = 'https://appleseed-wa.herokuapp.com/api/users/';
// for more info at the end put number id
let userList = [];

async function getUser() {
    const response = await fetch(userApi);
    const data = await response.json();
    userList.push[data];
}