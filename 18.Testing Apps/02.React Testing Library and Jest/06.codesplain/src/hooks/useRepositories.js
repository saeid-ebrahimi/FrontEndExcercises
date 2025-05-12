import axios from 'axios';
import useSWR from 'swr';

async function repositoriesFetcher([url, searchQuery]) {
  const res = await axios.get(url, {
    params: {
      q: searchQuery || '',
      per_page: 10,
    },
  });

  return res.data.items;
}

export default function useRepositories(searchQuery) {
  const { data, error, isLoading } = useSWR(
    searchQuery && ['/api/repositories', searchQuery],
    repositoriesFetcher
  );

  return {
    data,
    isLoading,
    error,
  };
}
