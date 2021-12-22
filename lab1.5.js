function getAllworkers(category) {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: category[0], id: 1 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: category[1], id: 2 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: category[2], id: 3 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: category[0], id: 4 }
    ];
    return workers;
}
function getWorkersNamesByCategory(workers, category) {
    if (category === void 0) {
        category = "Designer";
    }
    var neededWorkers = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category) {
            neededWorkers.push(worker.surname);
        }
    }
    return neededWorkers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) {
        workers = getAllworkers(Category);
    }
    var numbOfWorkers = workers.length;
    console.log(numbOfWorkers);
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available === true) {
            var workerName = worker.Name + " " + worker.surname;
            console.log(workerName);
        }
    }
}
var createCustomer = function (name, age, city) {
    console.log("" + name);
    if (age !== undefined) {
        console.log("" + age);
    }
    if (city !== undefined) {
        console.log("" + city);
    }
};
var checkoutWorker = function (customer, workerIDs, workers) {
    workerIDs.forEach(function (el) {
        workers.forEach(function (w) {
            if (w.id === el && w.available === true) {
                var avab = w.Name + " " + w.surname;
                console.log(avab);
            }
        });
    });
    console.log(customer);
};
var Category;
(function (Category) {
    Category[Category["Bussiness_Analyst"] = 0] = "Bussiness_Analyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["Scrum_Master"] = 4] = "Scrum_Master";
})(Category || (Category = {}));
createCustomer("Customer1");
createCustomer("Customer2", 21);
createCustomer("Customer3", 22, "Kyiv");
console.log("------------------------------");
var workers = getAllworkers(Category);
var result = getWorkersNamesByCategory(workers);
console.log(result);
console.log("------------------------------");
logFirstAvailable();
console.log("------------------------------");
checkoutWorker("Ann", [1, 2, 4], workers);
