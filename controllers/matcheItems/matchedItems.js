const db = require("../../database/database");

exports.getMatchedItems = async (req, res) => {
  try {
    const connection = await db();
    const [rows, fields] = await connection.query(
      "SELECT * FROM matched_items"
    );
    connection.release(); // Release the connection back to the pool
    res.send(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
