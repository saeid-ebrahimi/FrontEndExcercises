const hex = '0123456789ABCDEF'.split('');

/**
 * Generates a random 6-character hex color code
 * @returns A random hex color (e.g., "A3F2B1")
 */
export const generateRandomColor = (): string => {
  let result = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    result += hex[randomIndex];
  }

  return result;
};
