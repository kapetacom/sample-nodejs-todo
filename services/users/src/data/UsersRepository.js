//
// GENERATED SOURCE - DO NOT EDIT
//
const {
    AbstractPostgresRepository
} = require("@blockware/sdk-sqldb-postgresql");

class UsersRepository extends AbstractPostgresRepository {
    constructor() {
        super("users");
    }
}

module.exports = new UsersRepository();
