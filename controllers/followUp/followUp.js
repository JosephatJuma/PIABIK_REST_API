const db = require("../../database/database");

exports.followUp = async (req, res) => {
  try {
    const { uiqueId } = req.params;
    const sql = `SELECT * FROM matched_items WHERE uniqueId = ?`;
    const matched = await db.query(sql, [uiqueId]);
    if (matched[0].length > 0) {
      console.log(matched);
      res.json(matched[0]);
    } else {
      const sql1 = `SELECT * FROM lost_items WHERE uniqueId = ?`;
      const lost = await db.query(sql1, [uiqueId]);
      if (lost[0].length > 0) {
        console.log(lost);
        res.json(lost[0]);
      } else {
        const sql2 = `SELECT * FROM found_items WHERE uniqueId = ?`;
        const found = await db.query(sql2, [uiqueId]);
        if (found[0].length > 0) {
          console.log(found);
          res.json(found[0]);
        } else {
          res.send("No items found");
        }
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
