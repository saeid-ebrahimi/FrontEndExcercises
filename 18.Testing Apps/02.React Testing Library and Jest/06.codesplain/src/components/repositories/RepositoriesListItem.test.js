import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import RepositoriesListItem from "./RepositoriesListItem"

function renderComponent() {
    const repository = {
        full_name: "facebook/react",
        language: "C++",
        description: "A framework for building native applications using React",
        owner: "facebook",
        name: "react-native",
        html_url: "https://github.com/facebook/react-native",
    }
    render(<MemoryRouter>
        <RepositoriesListItem repository={repository} />
    </MemoryRouter>)
}


test("shows a link to the github homepage for this repository", () => {
    renderComponent()

    const linkElement = screen
})