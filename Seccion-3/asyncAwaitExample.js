let employees = [{
    id: 1,
    name: "Jhon Thomson"
},
{
    id: 2,
    name: "Mia Kalifa"
},
{
    id: 3,
    name: 'Albert Giordaneli'
}];

let salaries = [{
    id: 1,
    salary: 13445,
},
{
    id: 2,
    salary: 90099
}];

let getEmployee = async(id) => {
    let employee =  employees.find(e => e.id === id);
    if(!employee){
        throw new Error(`Employee with ID ${id} Not Found`)
    }
    return employee;
}

let getSalary = async(employee) => {
    let employeeSalary = salaries.find(salary => salary.id === employee.id);
    if(!employeeSalary){
        throw new Error(`Salary not found for employee ${employee.id}`);
    }
    employee.salary = employeeSalary.salary;
    return employee;
}

let getEmployeeInformation = async(id) => {
    let employee = await getEmployee(id);
    let result = await getSalary(employee);

    return `${result.name} has a salary of $${result.salary}`;
}

getEmployeeInformation(2)
    .then(message => console.log(message))
    .catch(err => console.log(err));