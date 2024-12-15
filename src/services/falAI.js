import axios from "axios";

const API_URL = "https://fal.ai/v1/generate"; // Correct API URL

export const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt, // Pass the user input
        trigger_word: "blak_photo", // Optional
        create_masks: true,
        steps: 1000,
      },
      {
        headers: {
          Authorization: `Bearer cd34dd78-0496-4dd0-b744-152dead21ba1:ec943440bac7280cb5056a8f814b0082`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.diffusers_lora_file.url;
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate image. Check your API key or network connection.");
  }
};
