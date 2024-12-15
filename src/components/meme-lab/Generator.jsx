import React, { useState } from 'react';
import { generateImage } from "../../services/falAI"; // Import the image generation function

/**
 * Generator component for creating images based on user prompts.
 * Utilizes the falAI service to generate images.
 */
export default function Generator() {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [prompt, setPrompt] = useState(''); // State to store user input prompt
  const [imageUrl, setImageUrl] = useState(null); // State to store generated image URL

  /**
   * Handles the image generation process.
   * Sets loading state, clears previous image, and manages API call.
   */
  const handleGenerate = async () => {
    setLoading(true);
    setImageUrl(null); // Clear the previous image
    try {
      const url = await generateImage(prompt); // Call the falAI function
      setImageUrl(url); // Set the generated image URL
    } catch (err) {
      alert('Failed to generate image. Please check your API key or try again.');
      console.error('Error during image generation:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">BLAK Image Generator</h1>
      <input
        type="text"
        className="border p-2 rounded w-2/3 mb-4"
        placeholder="Enter a prompt (e.g., BLAK professional photo)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {imageUrl && (
        <div className="mt-6">
          <img src={imageUrl} alt="Generated" className="mx-auto max-w-full rounded" />
        </div>
      )}
    </div>
  );
}
