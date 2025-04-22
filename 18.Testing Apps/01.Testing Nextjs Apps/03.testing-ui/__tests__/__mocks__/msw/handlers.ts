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
      return res(
        ctx.json({
          userReservations: fakeUserReservations,
        })
      );
    }
  ),
];
