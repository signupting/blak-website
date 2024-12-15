import axios from 'axios';

// Fetch API key and LoRA ID from environment variables
const apiKey = import.meta.env.VITE_FAL_API_KEY;
const loraId = import.meta.env.VITE_LORA_ID;

/**
 * Generates an image using the fal.ai API based on the provided prompt.
 * @param {string} prompt - The text prompt for image generation.
 * @returns {Promise<string>} - A promise that resolves to the URL of the generated image.
 * @throws Will throw an error if the image generation fails.
 */
export const generateImage = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.fal.ai/v1/generate', // Correct API URL
      { prompt, loraId },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.image_url; // Return the generated image URL
  } catch (error) {
    console.error('Error generating image:', error.response?.data || error.message);
    throw new Error('Failed to generate image. Please check your API key and network connection.');
  }
};
