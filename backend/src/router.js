const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const wineControllers = require("./controllers/wineControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);

router.get("/wines", wineControllers.browse);
router.get("/wines/:id", wineControllers.read);

module.exports = router;
