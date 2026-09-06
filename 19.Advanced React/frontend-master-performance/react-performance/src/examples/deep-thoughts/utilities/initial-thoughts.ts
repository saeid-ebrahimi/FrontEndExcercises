import { createThought } from './create-thought';

const thoughts = [
  'I should start a podcast.',
  'Is coffee just bean soup?',
  'Why do we park in driveways and drive on parkways?',
  'If you clean a vacuum cleaner, are you the vacuum cleaner?',
  'If you drop soap on the floor, is the floor clean or is the soap dirty?',
];

export const initialThoughts = thoughts.map((content) => createThought(content));
