var Category;
(function (Category) {
    Category[Category["Bussiness_Analyst"] = 10000] = "Bussiness_Analyst";
    Category[Category["Developer"] = 15000] = "Developer";
    Category[Category["Designer"] = 8000] = "Designer";
    Category[Category["QA"] = 12000] = "QA";
    Category[Category["Scrum_master"] = 7000] = "Scrum_master";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.Bussiness_Analyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Designer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.QA },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Scrum_master }
    ];
    return workers;
}
function getWorkerByID() {
    var id = prompt("Введіть id");
    for (var i = 0; i < workers.length; i++) {
        if (workers[i].id.toString() == id) {
            return workers[i];
        }
    }
}
function printWorker(idWorker) {
    console.log(idWorker.name + " " + idWorker.surname + " отримує " + idWorker.salary);
}
var workers = getAllWorkers();
console.log(workers);
var propWorker = getWorkerByID();
console.log(propWorker);
printWorker(propWorker);
