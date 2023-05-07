const { google } = require("googleapis");
const { SPREADSHEET_ID, KEY_FILE, SCOPES, ROSTER_DATA } = require("@constants/roster");

exports.getAllMcs = async () => {
  const googleSheets = google.sheets("v4");
  const auth = new google.auth.GoogleAuth({ keyFile: KEY_FILE, scopes: SCOPES });

  const { data } = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId: SPREADSHEET_ID,
    ranges: ROSTER_DATA.map(({ range }) => `Mechanic Sunset!${range}`),
  });

  return data.valueRanges
    .map(({ values }, index) =>
      values
        .filter(([_, IcName]) => IcName && IcName.length > 2)
        .map(([badge, IcName, discordName]) => ({ rank: index + 1, badge, IcName, discordName }))
    )
    .flat();
};

exports.getMcsByRank = async (rank) => {
  let range;
  for (let MC of ROSTER_DATA) if (MC.rank === +rank) range = MC.range;

  const googleSheets = google.sheets("v4");
  const auth = new google.auth.GoogleAuth({ keyFile: KEY_FILE, scopes: SCOPES });

  const { data } = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: SPREADSHEET_ID,
    range: `Mechanic Sunset!${range}`,
  });

  return data.values
    .filter(([_, IcName]) => IcName && IcName.length > 2)
    .map(([badge, IcName, discordName]) => {
      return { rank, badge, IcName, discordName };
    });
};
