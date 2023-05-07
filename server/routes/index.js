const express = require("express");
const route = express.Router();

const { getAllMcs, getMcsByRank } = require("@libs/roster/readData");

route.get("/mc", async (req, res) => {
  try {
    const data = await getAllMcs();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/mc/:rank", async (req, res) => {
  const rank = req.params.rank;

  try {
    if (rank > 0 && rank < 14) {
      const data = await getMcsByRank(rank);
      res.status(200).json(data);
    } else {
      throw new Error("Rank Should be between 1 to 13 !");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
