import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../src/apis/cmsApis";

export function useGetData<T>(getUrl: string) {
  return useQuery<T, Error>({
    queryKey: [getUrl],
    queryFn: () => getData<T>(getUrl),
  });
}
