function getAllworkers(category) {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: category[0], id: 1 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: category[1], id: 2 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: category[2], id: 3 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: category[0], id: 4 }
    ];
    return workers;
}
var developerList = function (workers) {
    workers.forEach(function (element) {
        if (element.category === "Developer") {
            console.log(element.Name + " " + element.surname);
        }
    });
};
var getWorkerByiD = function (workers, id) {
    var rightWorker = workers.find(function (element) { return element.id == id; });
    return rightWorker;
};
var Category;
(function (Category) {
    Category[Category["Bussiness_Analyst"] = 0] = "Bussiness_Analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_Master"] = 4] = "Scrum_Master";
})(Category || (Category = {}));
var id;
setTimeout(function () {
    id = prompt("Введіть id: ");
    var workerID = getWorkerByiD(workersList, id);
    console.log(workerID);
}, 2000);
var workersList = getAllworkers(Category);
var developers = developerList(workersList);
