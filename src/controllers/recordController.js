const Record = require("../models/Record");

// CREATE
exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};