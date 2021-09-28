const { Pool } = require("pg");

const PG_URI =
  "postgres://wkrhjzjf:jigK3Uy8skzSloduvZVeIHpUMid986aL@raja.db.elephantsql.com/wkrhjzjf";

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: async (text, params, callback) => {
    console.log("db pool executed query ->", text);
    return pool.query(text, params, callback);
  },
}
