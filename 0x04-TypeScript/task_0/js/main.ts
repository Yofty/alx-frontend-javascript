interface stuent {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Addis',
  lastName: 'Alemayehu',
  age: 22,
  location: 'AddisAbaba',
};

const student2: Student = {
  firstName: 'Betelhem',
  lastName: 'Abebe',
  age: 28,
  location: 'AddisAbaba'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightgray";
table.appendChild(tbody);

studentList.forEach((student: Student): void => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "2px solid white";
  locationCell.style.border = "2px solid white";
  nameCell.style.padding = "4px";
  locationCell.style.padding = "4px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendchild(row);
});

document.body.appendChild(table);
