const db = require("../../database/database");

exports.getMatchedItems = async (req, res) => {
  try {
    const sql = `SELECT * FROM matched_items`;
    const result = await db.query(sql);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
