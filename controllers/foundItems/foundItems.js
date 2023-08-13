const db = require("../../database/database");

exports.getFoundItems = async (req, res) => {
  try {
    const sql = `SELECT * FROM found_items`;
    const result = await db.query(sql);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.postFoundItem = async (req, res) => {
  const { category, name, description, location, contact, uniqueId } = req.body;
  try {
    const sql = `INSERT INTO found_items (category, name, description, location, contact, uniqueId) VALUES (?, ?,?,?, ?, ?)`;
    await db.query(sql, [
      category,
      name,
      description,
      location,
      contact,
      uniqueId,
    ]);
    res.send("Found items successfully posted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
