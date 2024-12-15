/**
 * Formats error messages for user display
 * @param {Error} error - The error object
 * @returns {string} Formatted error message
 */
export const formatErrorMessage = (error) => {
  if (error.message.includes('Missing VITE_FAL_KEY')) {
    return 'API key not configured. Please check the setup.';
  }
  if (error.message.includes('Invalid response')) {
    return 'Failed to generate image. Please try again.';
  }
  return error.message;
};

/**
 * Logs errors with additional context
 * @param {Error} error - The error object
 * @param {string} context - Context where the error occurred
 */
export const logError = (error, context) => {
  console.error(`Error in ${context}:`, {
    message: error.message,
    stack: error.stack,
    context,
  });
};