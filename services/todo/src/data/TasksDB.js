//
// GENERATED SOURCE - DO NOT EDIT
//
const { MongoDB } = require("@blockware/sdk-nosql-mongodb");

class TasksDB extends MongoDB {
    constructor() {
        super("tasks");
    }
}

module.exports = new TasksDB();
