const db = require("../../database/database");

exports.followUp = async (req, res) => {
  try {
    const code = req.params.secretCode;
    const sql = `SELECT * FROM matched_items WHERE SecretCode = ?`;
    const matched = await db.query(sql, [code]);
    if (matched[0].length > 0) {
      console.log(matched);
      res.json(matched[0]);
    } else {
      const sql1 = `SELECT * FROM lost_items WHERE SecretCode = ?`;
      const lost = await db.query(sql1, [code]);
      if (lost[0].length > 0) {
        console.log(lost);
        res.json(lost[0]);
      } else {
        const sql2 = `SELECT * FROM found_items WHERE SecretCode = ?`;
        const found = await db.query(sql2, [code]);
        if (found[0].length > 0) {
          console.log(found);
          res.json(found[0]);
        } else {
          res.send({ message: "No item found!", status: false });
        }
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
