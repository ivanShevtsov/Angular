var Category;
(function (Category) {
    Category[Category["Bussiness_Analyst"] = 10000] = "Bussiness_Analyst";
    Category[Category["Developer"] = 15000] = "Developer";
    Category[Category["Designer"] = 8000] = "Designer";
    Category[Category["QA"] = 12000] = "QA";
    Category[Category["Scrum_master"] = 7000] = "Scrum_master";
})(Category || (Category = {}));
var logPrize = {
    id: 1,
    name: "Oleksyi",
    surname: "Stepanenko",
    available: true,
    salary: Category.Scrum_master,
    markPrize: {
        prize: "Car"
    }
};
function logger() {
    var prize = logPrize;
    console.log(prize);
}
logger();
