var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReferenceItem = /** @class */ (function () {
    /*constructor(newTitle:string, newYear:number) {
        console.log("Creating a new ReferenceItem...")
        this.title = newTitle
        this.year = newYear
    }*/
    function ReferenceItem(newTitle, newYear) {
        this.title = newTitle;
        this.year = newYear;
    }
    ReferenceItem.prototype.getter = function () {
        console.log(this.publisher.toLocaleUpperCase());
    };
    ReferenceItem.prototype.setter = function (newPublisher) {
        this.publisher = newPublisher;
    };
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log(ReferenceItem.department);
    };
    ReferenceItem.department = "FIT";
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newEdition, newTitle, newYear) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = newEdition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition:", this.edition, "(", this.year, ")");
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia(12, "Harry Potter", 1997);
refBook.printItem();
