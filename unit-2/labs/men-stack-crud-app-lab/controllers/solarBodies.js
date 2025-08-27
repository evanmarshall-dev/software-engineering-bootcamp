const SolarBody = require("../models/solarBody");

// GET /solar-bodies - Index: Show all solar bodies
const index = async (req, res) => {
  try {
    const solarBodies = await SolarBody.find({}).sort({ positionFromSun: 1 });
    res.render("solar-bodies/index", { solarBodies });
  } catch (error) {
    console.error("Error fetching solar bodies:", error);
    res.status(500).send("Error fetching solar bodies");
  }
};

// GET /solar-bodies/new - New: Show form to create new solar body
const newSolarBody = (req, res) => {
  res.render("solar-bodies/new");
};

// POST /solar-bodies - Create: Handle form submission to create new solar body
const create = async (req, res) => {
  try {
    const newSolarBody = new SolarBody(req.body);
    await newSolarBody.save();
    res.redirect("/solar-bodies");
  } catch (error) {
    console.error("Error creating solar body:", error);
    res.status(400).send("Error creating solar body");
  }
};

// GET /solar-bodies/:id - Show: Display specific solar body
const show = async (req, res) => {
  try {
    const solarBody = await SolarBody.findById(req.params.id);
    if (!solarBody) {
      return res.status(404).send("Solar body not found");
    }
    res.render("solar-bodies/show", { solarBody });
  } catch (error) {
    console.error("Error fetching solar body:", error);
    res.status(500).send("Error fetching solar body");
  }
};

// GET /solar-bodies/:id/edit - Edit: Show form to edit solar body
const edit = async (req, res) => {
  try {
    const solarBody = await SolarBody.findById(req.params.id);
    if (!solarBody) {
      return res.status(404).send("Solar body not found");
    }
    res.render("solar-bodies/edit", { solarBody });
  } catch (error) {
    console.error("Error fetching solar body for edit:", error);
    res.status(500).send("Error fetching solar body");
  }
};

// PUT /solar-bodies/:id - Update: Handle form submission to update solar body
const update = async (req, res) => {
  try {
    const updatedSolarBody = await SolarBody.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSolarBody) {
      return res.status(404).send("Solar body not found");
    }
    res.redirect(`/solar-bodies/${req.params.id}`);
  } catch (error) {
    console.error("Error updating solar body:", error);
    res.status(400).send("Error updating solar body");
  }
};

// DELETE /solar-bodies/:id - Destroy: Delete solar body
const destroy = async (req, res) => {
  try {
    const deletedSolarBody = await SolarBody.findByIdAndDelete(req.params.id);
    if (!deletedSolarBody) {
      return res.status(404).send("Solar body not found");
    }
    res.redirect("/solar-bodies");
  } catch (error) {
    console.error("Error deleting solar body:", error);
    res.status(500).send("Error deleting solar body");
  }
};

module.exports = {
  index,
  new: newSolarBody,
  create,
  show,
  edit,
  update,
  destroy,
};
