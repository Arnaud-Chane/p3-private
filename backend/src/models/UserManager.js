const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      user.title,
    ]);
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findUser(id) {
    return this.database.query(
      `select * from  ${this.table} where user_id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
