

class Student {
    constructor(idNum, firstName, lastName, gender, group, age, city, hobby) {
        this.idNum = parseInt(idNum);
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.group = parseInt(group);
        this.aeg = parseInt(age);
        this.city = city;
        this.hobby = hobby;
     }

     editStudent = (firstName, lastName, gender, group, age, city, hobby) => {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.group = group;
        this.age = age;
        this.city = city;
        this.hobby = hobby;
      }
  
}

class Group {
    constructor(){
        this.students = [];
        this.state = 'id';
}

  getUser = async (url = `https://appleseed-wa.herokuapp.com/api/users/`) => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return await data;
}

createStudent = (idNum, firstName, lastName, gender, group, age, city, hobby) => {
    const student = new Student(idNum, firstName, lastName, gender, group, age, city, hobby);
    this.students.push(student);
    this.student.sort((a,b) => a.id - b.id);
}

updateStudent = async () => {
    const studentInfo = await this.getUser();
    await Promise.all(studentInfo.map(async (student) => {
        const idNum = student.id;
        const moreData = await this.getUser(`https://appleseed-wa.herokuapp.com/api/users/${id}`);
        const firstName = student.firstName;
        const lastName = student.lastName;
        const gender = moreData.gender;
        const group = student.group;
        const age = moreData.age;
        const city = moreData.city;
        const hobby = moreData.hobby;
        
        this.createStudent(idNum, firstName, lastName, gender, group, age, city, hobby);

    }));

this.drawTable();
}

drawTable = () => {
    const container = document.querySelector('.container-table');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const titles = ['ID', 'First Name', 'Last Name', 'Gender', 'Group', 'Age', 'City', 'Hobby','Options'];
      titles.forEach(title => {
        const th = document.createElement('th');
        th.setAttribute('ascending','false');
        th.textContent = title;
        if (title !== 'Control') {
          const i = document.createElement('i');
          i.classList.add('fas');
          i.classList.add('fa-sort');
          th.appendChild(i);
        }
        tr.appendChild(th);
      });
      tr.lastElementChild.setAttribute('colspan','2');
      thead.appendChild(tr);
      table.appendChild(thead);
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);
      container.appendChild(table);
      this.students.forEach(student => {
        this.insertRowTable(student);
      })
}
// make row for student
insertRowTable = (student) => {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    const data = ['id','firstName','lastName','gender', 'Group', 'age', 'city', 'hobby','Edit', 'Delete'];
    data.forEach(el => {
      const td = document.createElement('td');
      if (el === 'edit' || el === 'delete') {
        const button = document.createElement('button');
        if (el === 'edit') {
          button.textContent = 'Edit';
          button.classList.add('edit-btn');
          button.addEventListener('click',this.editStudent);
        } else {
          button.textContent = 'Delete';
          button.classList.add('delete-btn');
          button.addEventListener('click',this.deletePerson);
        }
        td.appendChild(button);
      } else {
        td.textContent = student[el];
      }
      tr.appendChild(td);
    })
    tbody.appendChild(tr);
  }



  editStudent = (e) => {
    const editButton = e.target;
    const row = editButton.parentElement.parentElement.children;
    const deleteButton = row[9].querySelector('button');
    deleteButton.classList.add('hidden');
    editButton.classList.add('hidden');
    const confirmButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    const id = parseInt(row[0].textContent);
    cancelButton.addEventListener('click', () => {
      const currentStudent = this.students.find(val => val.id === id);
      const data = ['firstName','lastName','capsule', 'age', 'city', 'gender', 'hobby'];
      for (let i = 1; i <=7;i++) {
        row[i].textContent = currentStudent[data[i-1]];
      }
      cancelButton.remove();
      confirmButton.remove();
      editButton.classList.remove('hidden');
      deleteButton.classList.remove('hidden');
    })
    editButton.parentElement.appendChild(cancelButton);
    confirmButton.textContent = 'Confirm';
    confirmButton.addEventListener('click', (e) => {
      const rowInputs = [];
      for (const element of row) {rowInputs.push(element);}
      const firstName = rowInputs[1].querySelector('input').value;
      const lastName = rowInputs[2].querySelector('input').value;
      const group = rowInputs[3].querySelector('input').value;
      const age = rowInputs[4].querySelector('input').value;
      const city = rowInputs[5].querySelector('input').value;
      const gender = rowInputs[6].querySelector('input').value;
      const hobby = rowInputs[7].querySelector('input').value;
      const newVal = [];
      for (let i = 1; i <=7;i++) {
        const text = rowInputs[i].querySelector('input').value;
        newVal.push(text);
        rowInputs[i].textContent = text;
      }
      const currentStudent = this.students.find(student => student.id === id);
      currentStudent.editStudent(newVal[0],newVal[1],parseInt(newVal[2]),parseInt(newVal[3]),newVal[4],newVal[5],newVal[6]);
      cancelButton.remove();
      confirmButton.remove();
      editButton.classList.remove('hidden');
      deleteButton.classList.remove('hidden');
      
    })
    deleteButton.parentElement.appendChild(confirmButton);
    for (let i = 1; i <= 7; i++) {
      const text = row[i].textContent;
      row[i].textContent = '';
      const input = document.createElement('input');
      input.setAttribute('type','text');
      input.value = text;
      row[i].appendChild(input);
      i === 1 ? input.focus() : '';
    }
    
  }

  // Delete
  deleteStudent = (e) => {
    const deleteButton = e.target;
    const row = deleteButton.parentElement.parentElement.children;
    const id = row[0].textContent;
    const currentStudent = this.students.find(student => student.id === parseInt(id));
    const index = this.students.indexOf(currentStudent);
    this.students.splice(index,1);
    const rowNew = [];
    for (const element of row) {rowNew.push(element);}
    rowNew[0].parentElement.remove();
  }
}




const list = new Group();
list.drawTable();







