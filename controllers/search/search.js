const db = require("../../database/database");

exports.search = async (req, res) => {
  const uniqueId = req.params.uniqueId;
  try {
    const sql = `SELECT * FROM lost_items WHERE UniqueID LIKE ? 
                 UNION 
                 SELECT * FROM found_items WHERE UniqueID LIKE ? 
                 UNION 
                 SELECT * FROM matched_items WHERE UniqueID LIKE ?`;
    const connection = await db();
    const [rows, fields] = await connection.query(sql, [
      `%${uniqueId}%`,
      `%${uniqueId}%`,
      `%${uniqueId}%`,
    ]);
    connection.release();
    if (rows.length > 0) {
      res.send(rows);
    } else {
      res.send({ message: "No item found!", status: false });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
