const express = require("express");
const { getMcs, getRange, formatMcs } = require("../libs/utils");
const route = express.Router();

route.get("/mc", async (req, res) => {
  try {
    const { valueRanges } = await getMcs(null);
    res.status(200).json(formatMcs(valueRanges, true));
  } catch (error) {
    res.status(500).send(error);
  }
});

route.get("/mc/:rank", async (req, res) => {
  try {
    const range = getRange(req.params.rank);
    const { values } = await getMcs(`Mechanic Sunset!${range}`);
    res.status(200).json(formatMcs(values));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
