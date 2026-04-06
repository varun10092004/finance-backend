const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const expense = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpense = expense[0]?.total || 0;

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryData = async (req, res) => {
  try {
    const data = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};