import axios from 'axios';
import useSWR from 'swr';
import getLangFromPath from '../util/getLangFromPath';

async function explanationFetcher([url, { text, path }]) {
  const { data } = await axios.post(url, {
    text,
    language: getLangFromPath(path),
  });
  const choice = data && data.choices && data.choices[0] && data.choices[0];

  return choice.text.trim();
}

export default function useExplanation({ text, path }) {
  const { data, error, isLoading } = useSWR(
    [`/api/explain`, { text, path }],
    explanationFetcher
  );

  return {
    isLoading,
    error,
    explanation: data,
  };
}
