const spreadsheetId = "1JiXfkZVLQK5_QcXIVCi7MTHtglQPw6nnelLTO3P5rF8";
const keyFile = "credentials.json";
const scopes = "https://www.googleapis.com/auth/spreadsheets";

const ranksInRoster = [
  "AL4:AN69",
  "AG4:AI69",
  "AB4:AD69",
  "W4:Y69",
  "R28:T69",
  "R4:T25",
  "M28:O69",
  "M4:O25",
  "H46:J69",
  "H29:J43",
  "H12:J26",
  "H4:J9",
  "C6:E10",
];

module.exports = { spreadsheetId, keyFile, scopes, ranksInRoster };
