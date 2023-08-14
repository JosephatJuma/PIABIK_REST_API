const db = require("../../database/database");

exports.search = async (req, res) => {
  try {
    const sql = `SELECT * FROM lost_items WHERE UniqueID = '?' UNION SELECT * FROM found_items WHERE UniqueID = '?' UNION SELECT * FROM matched_items WHERE UniqueID = '?'`;
    const result = await db.query(sql, [
      req.params.id,
      req.params.id,
      req.params.id,
    ]);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
