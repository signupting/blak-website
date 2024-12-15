// Environment configuration with type checking
export const config = {
  falAI: {
    apiKey: import.meta.env.VITE_FAL_KEY,
    loraId: import.meta.env.VITE_LORA_ID,
  }
};

// Validation
const validateConfig = () => {
  if (!config.falAI.apiKey) {
    console.error('Missing VITE_FAL_KEY environment variable');
  }
  if (!config.falAI.loraId) {
    console.error('Missing VITE_LORA_ID environment variable');
  }
};

validateConfig();