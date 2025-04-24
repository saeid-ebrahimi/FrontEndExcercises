import { fakeUserReservations } from "@/__tests__/__mocks__/fakeData/userReservations";
import { rest } from "msw";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { data } from "msw/lib/types/context";

export const handlers = [
  rest.get(
    "http://localhost:3000/api/shows/:showId",
    async (req, res, ctx) => {
      const { fakeShows } = await readFakeData();
      const { showId } = req.params;

      /* 
      index / showId = 0 has seats available in fake data
      index / showId = 1 has NO seats available in fake data
      */
      return res(
        ctx.json({
          show: fakeShows[
            parseInt(showId as string)
          ],
        })
      );
    }
  ),

  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    (req, res, ctx) => {
      const { userId } = req.params;
      const userReservation =
        parseInt(userId as string) === 1
          ? fakeUserReservations
          : [];
      return res(
        ctx.json({
          userReservations: userReservation,
        })
      );
    }
  ),
];
