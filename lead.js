const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET all leads
  router.get("/", async (req, res) => {
    const leads = await db.collection("leads").find().toArray();
    res.json(leads);
  });

  // POST new lead
  router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;

    await db.collection("leads").insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    });

    res.json({ msg: "Lead added" });
  });

  return router;
};