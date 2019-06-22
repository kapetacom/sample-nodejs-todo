//
// GENERATED SOURCE - DO NOT EDIT
//
const { AbstractPostgresRepository } = require("@blockware/sqldb-postgresql");

class UsersRepository extends AbstractPostgresRepository {
    constructor() {
        super("users");
    }
}

module.exports = new UsersRepository();
