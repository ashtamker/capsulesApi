const userApi = 'https://appleseed-wa.herokuapp.com/api/users/';
// for more info at the end put number id
// const moreInfo = 'https://appleseed-wa.herokuapp.com/api/users/${data[i].id';
let userList = [];

async function getUser() {
    const response = await fetch(userApi);
    const data = await response.json();
    userList.push[data];
}

class Group {
    constructor(){
        this.students = [];
    }
}

for(let i = 0; i < data.length; i++){
     const userData = await fetch(moreInfo+'${data[i].id}');
     const extraInfo = await userData.json();
     const newUser = new Student(userData[i].id, userData[i].firstName, userData[i].lastname, userData[i].capsule, extraInfo.age, extraInfo.city, extraInfo.gender, extraInfo.hobby);
     this.students.push(newUser);

}

getUser();
console.log(userList);

class Student {
    constructor(idNum, firstName, lastName, group, age, city, hobby,) {
        this.idNum = parseInt(idNum);
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = parseInt(group);
        this.aeg = parseInt(age);
        this.city = city;
        this.hobby = hobby;
        


    }
}
