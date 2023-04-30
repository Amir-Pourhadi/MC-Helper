const { google } = require("googleapis");
const { spreadsheetId, keyFile, scopes, ranksInRoster } = require("../constants");

async function getMcs(range) {
  const googleSheets = google.sheets("v4");
  const auth = new google.auth.GoogleAuth({ keyFile, scopes });

  const { data } = range
    ? await googleSheets.spreadsheets.values.get({ auth, spreadsheetId, range })
    : await googleSheets.spreadsheets.values.batchGet({ auth, spreadsheetId, ranges: ranksInRoster });

  return data;
}

function getRange(rank) {
  return ranksInRoster[rank - 1];
}

function formatMcs(mcs, isBatch = false) {
  if (isBatch) mcs = mcs.map(({ values }) => values).flat();
  return mcs.filter((mc) => mc[1] && mc[1].length > 2).map(([badge, name, discord]) => ({ badge, name, discord }));
}

module.exports = { getMcs, getRange, formatMcs };
