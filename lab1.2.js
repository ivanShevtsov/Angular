function getAllworkers(category) {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: category[0] },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: category[1] },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: category[2] },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: category[0] }
    ];
    return workers;
}
function getWorkersNamesByCategory(category, workers) {
    var neededWorkers = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category) {
            neededWorkers.push(worker.surname);
        }
    }
    return neededWorkers;
}
var Category;
(function (Category) {
    Category[Category["Bussiness_Analyst"] = 0] = "Bussiness_Analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_Master"] = 4] = "Scrum_Master";
})(Category || (Category = {}));
var workers = getAllworkers(Category);
var result = getWorkersNamesByCategory(Category[0], workers);
console.log(result);
