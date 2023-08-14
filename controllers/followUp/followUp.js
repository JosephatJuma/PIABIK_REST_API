const db = require("../../database/database");

exports.followUp = async (req, res) => {
  try {
    const code = req.params.secretCode;
    //check first in matched Items
    const sql = `SELECT * FROM matched_items WHERE SecretCode = ?`;
    const connection = await db();
    const [rows, fields] = await connection.query(sql, [code]);
    connection.release();

    if (rows.length > 0) {
      res.send(rows);
    } //If not in matched then check in lost items
    else {
      const sql1 = `SELECT * FROM lost_items WHERE SecretCode = ?`;
      const connection1 = await db();
      const [rows, fields] = await connection.query(sql1, [code]);
      connection1.release();
      if (rows.length > 0) {
        res.send(rows);
      }
      //Not in lost also then check in found items
      else {
        const sql2 = `SELECT * FROM found_items WHERE SecretCode = ?`;
        const connection2 = await db();
        const [rows, fields] = await connection.query(sql2, [code]);
        connection2.release();
        if (rows.length > 0) {
          res.send(rows);
        }
        //If there is nothing totally
        else {
          res.send({ message: "No item found!", status: false });
        }
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
