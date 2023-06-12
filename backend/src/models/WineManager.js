const AbstractManager = require("./AbstractManager");

class wineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }

  insert(wine) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      wine.title,
    ]);
  }

  update(wine) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [wine.title, wine.id]
    );
  }

  findWine(id) {
    return this.database.query(
      `select * from  ${this.table} where wine_id = ?`,
      [id]
    );
  }
}

module.exports = wineManager;
