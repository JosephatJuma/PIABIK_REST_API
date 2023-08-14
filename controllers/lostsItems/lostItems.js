const db = require("../../database/database");
exports.postLostItem = async (req, res) => {
  const { category, name, description, location, contact, uniqueId } = req.body;
  try {
    const sql = `INSERT INTO lostItems (category, name, description, location, contact, uniqueId) VALUES (?, ?,?,?, ?, ?) ORDER BY DatePosted ASC`;
    await db.query(sql, [
      category,
      name,
      description,
      location,
      contact,
      uniqueId,
    ]);
    res.send("Lost items successfully posted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLostItems = async (req, res) => {
  try {
    const sql = `SELECT * FROM lost_items`;
    const result = await db.query(sql);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
