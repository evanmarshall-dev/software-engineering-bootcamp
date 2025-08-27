const express = require("express");
const router = express.Router();
const solarBodiesController = require("../controllers/solarBodies");

// GET /solar-bodies - Index route
router.get("/", solarBodiesController.index);

// GET /solar-bodies/new - New route (must come before /:id routes)
router.get("/new", solarBodiesController.new);

// POST /solar-bodies - Create route
router.post("/", solarBodiesController.create);

// GET /solar-bodies/:id - Show route
router.get("/:id", solarBodiesController.show);

// GET /solar-bodies/:id/edit - Edit route
router.get("/:id/edit", solarBodiesController.edit);

// PUT /solar-bodies/:id - Update route
router.put("/:id", solarBodiesController.update);

// DELETE /solar-bodies/:id - Destroy route
router.delete("/:id", solarBodiesController.destroy);

module.exports = router;
