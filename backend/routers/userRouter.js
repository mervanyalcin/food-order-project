import express from "express";
import postgresClient from "../config/db.js";
const router = express.Router();

// Create user
router.post("/", async (req, res) => {
  try {
    const text =
      "INSERT INTO users (email, password, fullname, phonenumber, jwt_token) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4, $5) RETURNING *";
    const values = [
      req.body.email,
      req.body.password,
      req.body.fullName,
      req.body.phoneNumber,
      req.body.jwtToken,
    ];
    const { rows } = await postgresClient.query(text, values);
    return res.status(200).json(rows);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { emailorphone, password } = req.body;

  try {
    const text = `SELECT email, fullName, phonenumber, jwt_token, role FROM users WHERE email = '${emailorphone}' OR phonenumber = '${emailorphone}' AND password = crypt('${password}', password)`;
    const { rows } = await postgresClient.query(text);
    return res.status(200).send(rows[0]);
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

// Delete user
router.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const text = "DELETE FROM users WHERE id = $1 RETURNING *";
    const values = [userId];
    const { rows } = await postgresClient.query(text, values);
    if (!rows.length)
      return res.status(404).json({ message: "User not found." });

    return res.status(200).json({ deletedUser: rows[0] });
  } catch (error) {
    console.log("Error occured", error.message);
    return res.status(400).json({ message: error.message });
  }
});

export default router;
