import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("http://", () => {
        return HttpResponse.json({

        })
    })
]