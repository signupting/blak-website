const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001; // You can use any port

// Replace this API endpoint with the working endpoint
const API_URL = "https://fal.ai/v1/generate"; 

app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      API_URL,
      {
        prompt, // Pass the user input
        trigger_word: "blak_photo", // Optional trigger word
        create_masks: true,
        steps: 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FAL_API_KEY}`, // API Key from .env
          "Content-Type": "application/json",
        },
      }
    );

    // Send the result back to the frontend
    res.status(200).json({ imageUrl: response.data.diffusers_lora_file.url });
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.status(500).json({ error: "Failed to generate image." });
  }
});

// Start the serv
