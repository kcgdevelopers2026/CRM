import { saveToSheet } from "../../utils/googleSheets.js";

export const submitFeedback = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      dob,
      profession,
      branch,
      employee,
      purchased,
      rating,
      suggestion,
      liked,
      recommend,
    } = req.body;

    if (!customerName || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone required",
      });
    }

    const data = {
      customerName,
      phone,
      dob,
      profession,
      branch,
      employee,
      purchased,
      rating,
      suggestion,
      liked,
      recommend,
    };

    await saveToSheet(data);

    return res.json({
      success: true,
      message: "Saved to Google Sheets",
    });
  } catch (error) {
    console.error("Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save feedback",
      error: error.message,
    });
  }
};