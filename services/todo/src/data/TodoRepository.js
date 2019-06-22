//
// GENERATED SOURCE - DO NOT EDIT
//
const { AbstractMongoRepository } = require("@blockware/sdk-nosql-mongodb");

class TodoRepository extends AbstractMongoRepository {
    constructor() {
        super("todo");
    }
}

module.exports = new TodoRepository();
