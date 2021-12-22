var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var librarian = new UniversityLibrarian();
librarian.name = "Librarian1";
librarian.assistCustomer("Customer");
