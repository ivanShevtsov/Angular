var favouriteAuthor = {
    name: "AuthorName",
    email: "authormail.com",
    numBooksPublished: 8
};
var favouriteLibrarian = {
    name: "Librarian",
    email: "librarianmail.com",
    department: "Faculty",
    assistCustomer: function (custName) {
        if (custName === void 0) { custName = "Oleksyj"; }
    }
};
console.log(favouriteAuthor);
console.log(favouriteLibrarian);
