var ReferenceItem = /** @class */ (function () {
    /*constructor(newTitle:string, newYear:number) {
        console.log("Creating a new ReferenceItem...")
        this.title = newTitle
        this.year = newYear
    }*/
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.getter = function () {
        console.log(this.publisher.toLocaleUpperCase());
    };
    ReferenceItem.prototype.setter = function (newPublisher) {
        this.publisher = newPublisher;
    };
    ReferenceItem.department = "FIT";
    return ReferenceItem;
}());
var ref = new ReferenceItem("TНВ", 2016);
ref.setter("Форд");
ref.getter();
