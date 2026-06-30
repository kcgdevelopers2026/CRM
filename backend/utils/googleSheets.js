import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

// Parse credentials from env
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = process.env.SPREADSHEET_ID;
const sheetName = process.env.SHEET_NAME;

export const saveToSheet = async (data) => {
  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  await googleSheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:L`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.customerName,
          data.phone,
          data.dob,
          data.profession,
          data.branch,
          data.employee,
          data.purchased,
          data.rating,
          data.suggestion,
          data.liked,
          data.recommend,
          new Date().toLocaleString(),
        ],
      ],
    },
  });
};