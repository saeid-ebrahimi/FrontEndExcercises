import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import RepositoriesListItem from "./RepositoriesListItem"


function renderComponent() {
    const repository = {
        full_name: "facebook/react",
        language: "Javascript",
        description: "A framework for building applications using React",
        owner: {
            login: "facebook",

        },
        name: "react",
        html_url: "https://github.com/facebook/react",
    }
    render(<MemoryRouter>
        <RepositoriesListItem repository={repository} />
    </MemoryRouter>)
    return { repository }
}


test("shows a link to the github homepage for this repository", async () => {
    const { repository } = renderComponent()
    await screen.findByRole("img", { name: "Javascript" })
    const link = screen.getByRole("link", { name: /github repository/i })
    expect(link).toHaveAttribute('href', repository.html_url)

})

test("shows a fileIcon with the appropriate icon", async () => {
    const { repository } = renderComponent()
    const icon = await screen.findByRole("img", { name: repository.language })
})

test("shows a link to the code editor page", async () => {
    const { repository } = renderComponent()
    await screen.findByRole("img", { name: repository.language })
    const link = await screen.findByRole("link", {
        name: new RegExp(repository.owner.login)
    })
    expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`)

})