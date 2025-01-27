const express = require("express");
const router = express.Router();
const ownerModel = require("../Models/owners.models.js");

// POST: Create a new owner (restricted to development environment)
router.post("/create", async function (req, res) {
  if (process.env.NODE_ENV === "development") {
    try {
      const owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(403) // 403: Forbidden
          .send("You do not have permission to create a new owner");
      }

      const {  fullname, email, password } = req.body;

      // Validate input
      if (!fullname || !email || !password) {
        return res.status(400).send("All fields are required");
      }

      // Create owner
      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);
    } catch (error) {
      console.error("Error creating owner:", error);
      res.status(500).send("An error occurred while creating the owner");
    }
  } else {
    res.status(403).send("Route is restricted to development environment");
  }
});

// GET: Test route
router.get("/", function (req, res) {
  res.send("Hey user");
});

module.exports = router;
