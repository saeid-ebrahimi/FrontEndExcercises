import { useEffect, useState } from "react";
export function useDataSource<T>(
  getData: () => Promise<T>
) {
  const [data, setData] = useState<T>();
  useEffect(() => {
    (async () => {
      const result = await getData();
      setData(result);
    })();
  }, [getData]);
  return data;
}
