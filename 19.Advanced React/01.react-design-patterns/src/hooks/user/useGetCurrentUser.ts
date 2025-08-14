import { useState, useEffect, use } from "react";
import { getData } from "../../apis/cmsApis";
import type { TUser } from "./useGetCurrentUser.types";

export function useGetCurrentUser() {
  const [user, setUser] = useState<TUser | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const result = await getData<TUser>(
        "/current-user"
      );
      setUser(result);
    })();
  }, []);
  return (
    user || {
      name: "",
      age: 0,
      country: "",
      books: [],
    }
  );
}
