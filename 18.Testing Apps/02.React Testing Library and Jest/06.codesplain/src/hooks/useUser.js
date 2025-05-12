import axios from 'axios';
import useSWR from 'swr';

async function userFetcher(url) {
  const res = await axios.get(url);

  return res.data;
}

export default function useUser() {
  const { data, error, isLoading } = useSWR('/api/user', userFetcher);

  return {
    user: data?.user,
    isLoading,
    error,
  };
}
