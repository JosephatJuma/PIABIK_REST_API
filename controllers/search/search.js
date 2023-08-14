const db = require("../../database/database");

exports.search = async (req, res) => {
  const uniqueId = req.params.uniqueId;
  console.log(uniqueId);
  try {
    const sql = `SELECT * FROM lost_items WHERE UniqueID LIKE ? 
                 UNION 
                 SELECT * FROM found_items WHERE UniqueID LIKE ? 
                 UNION 
                 SELECT * FROM matched_items WHERE UniqueID LIKE ?`;
    const result = await db.query(sql, [
      `%${uniqueId}%`,
      `%${uniqueId}%`,
      `%${uniqueId}%`,
    ]);
    console.log(result);
    if (result[0].length > 0) {
      res.json(result[0]);
    } else {
      res.send({ message: "No item found!", status: false });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
