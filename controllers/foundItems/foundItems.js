const db = require("../../database/database");

exports.getFoundItems = async (req, res) => {
  try {
    const connection = await db();
    const [rows, fields] = await connection.query("SELECT * FROM found_items");
    connection.release();
    res.send(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.postFoundItem = async (req, res) => {
  const type = "Found";
  const {
    uniqueId,
    category,
    speciality,
    phone,
    firstName,
    lastName,
    status,
    datePosted,
    secretCode,
  } = req.body;
  try {
    const sql = `INSERT INTO found_items ( UniqueID,Category,Type,Speciality,Phone,FirstName,LastName,Status,DatePosted,SecretCode) VALUES (?, ?,?,?, ?, ?,?,?,?,?)`;
    const connection = await db();
    await connection
      .query(sql, [
        uniqueId,
        category,
        type,
        speciality,
        phone,
        firstName,
        lastName,
        status,
        datePosted,
        secretCode,
      ])
      .then((result) => {
        connection.release();
        res.send({ message: "Found item successfully posted", status: true });
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
