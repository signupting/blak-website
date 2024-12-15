import { useState, useCallback } from 'react';
import { generateImage } from '../services/falAI';

export function useImageGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const generate = useCallback(async (prompt) => {
    try {
      setIsGenerating(true);
      setError(null);
      const imageUrl = await generateImage(prompt);
      return imageUrl;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return {
    generate,
    isGenerating,
    error,
  };
}