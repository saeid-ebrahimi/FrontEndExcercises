import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw"
import HomeRoute from "./HomeRoute"
import { MemoryRouter } from "react-router";

"/api/repositories?q=stars:%3E10000+language:javascript&per_page=10"
const handlers = rest.get("/api/repositories", (req, res, ctx) => {
  req.url.searchParams.get('q');
  console.log(query);
  return res(
    ctx.json({
      items: [
        { id: 1, full_name: "full name!" },
        { id: 2, full_name: "other name!" }
      ]
    })
  )
})

const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers()
});

afterAll(() => {
  server.close()
});


test('renders two links for each language', async () => {
  render(<MemoryRouter>
    <HomeRoute />
  </MemoryRouter>)

  // await pause()
  // screen.debug()
})

// const pause = () => new Promise((resolve) => {
//   setTimeout(resolve, 100)
// })