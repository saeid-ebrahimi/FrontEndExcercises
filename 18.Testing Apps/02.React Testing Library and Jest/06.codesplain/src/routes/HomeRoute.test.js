import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw"
import HomeRoute from "./HomeRoute"
import { MemoryRouter } from "react-router";

"/api/repositories?q=stars:%3E10000+language:javascript&per_page=10"
const handlers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    const language = query.split("language:")[1]
    return res(
      ctx.json({
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` }
        ]
      })
    )
  })
]

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

  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ]

  for (let language of languages) {
    const links = await screen.findAllByRole('link', { name: new RegExp(`${language}_`) });
    expect(links).toHaveLength(2)

    expect(links[0]).toHaveTextContent(`${language}_one`)
    expect(links[0]).toHaveAttribute("href", `/repositories/${language}_one`)

    expect(links[1]).toHaveTextContent(`${language}_two`)
    expect(links[1]).toHaveAttribute("href", `/repositories/${language}_two`)
  }
  // await pause()
  // screen.debug()
})

// const pause = () => new Promise((resolve) => {
//   setTimeout(resolve, 100)
// })