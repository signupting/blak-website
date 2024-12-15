import React, { useState } from "react";
import { generateImage } from "../../services/falAI"; // Adjust path if needed

export default function Generator() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setImageUrl(null); // Clear previous image
    try {
      const url = await generateImage(prompt); // Call the generateImage function
      setImageUrl(url); // Set the generated image URL
    } catch (err) {
      alert("Failed to generate image. Please check your API key or try again.");
      console.error(err);
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
        {loading ? "Generating..." : "Generate"}
      </button>
      {imageUrl && (
        <div className="mt-6">
          <img src={imageUrl} alt="Generated" className="mx-auto max-w-full rounded" />
        </div>
      )}
    </div>
  );
}
