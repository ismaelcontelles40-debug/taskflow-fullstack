const Database = require("better-sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "../../taskflow.db");

const db = new Database(databasePath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL DEFAULT 0,
    priority TEXT NOT NULL
  )
`).run();

module.exports = db;