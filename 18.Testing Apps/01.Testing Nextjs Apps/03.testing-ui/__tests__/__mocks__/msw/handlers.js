import { http, HttpResponse } from "msw";
import { readFakeData } from "../fakeData";


export const handlers = [

    http.get("http://localhost:3000/api/shows/:showId", async () => {
        const { fakeShows } = await readFakeData()
        return HttpResponse.json({
            show: fakeShows[0]
        })
    })
]