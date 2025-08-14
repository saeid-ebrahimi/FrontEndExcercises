import { useEffect, useState } from "react";
import type { TUser } from "./useGetCurrentUser.types";
import { getData } from "../../apis/cmsApis";

export function useGetUser(userId: number) {
  const [user, setUser] = useState<TUser | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const result = await getData<TUser>(
        `users/${userId}`
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
