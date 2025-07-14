"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (res) {
    var ID = res.data.id;
    var title = res.data.title;
    var completed = res.data.completed;
    logDetails(ID, title, completed);
});
var logDetails = function (ID, title, completed) {
    console.log("ID: ".concat(ID, "\n                TItle: ").concat(title, "\n                completed:").concat(completed));
};
