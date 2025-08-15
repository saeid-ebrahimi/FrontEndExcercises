import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../apis/cmsApis";
export function useGetResource<T>(
  resourceUrl: string
) {
  const [resource, setResource] = useState<T>();
  useEffect(() => {
    (async () => {
      const result = await getData<T>(
        resourceUrl
      );
      setResource(result);
    })();
  }, [resourceUrl]);

  return resource;
}
