import { render, screen, act } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import RepositoriesListItem from "./RepositoriesListItem"
// make module mock
// jest.mock('../tree/FileIcon.js', () => {
//     // content of FileIcon.js
//     return () => {
//         return "File Icon Component"
//     }
// })

function renderComponent() {
    const repository = {
        full_name: "facebook/react",
        language: "Javascript",
        description: "A framework for building applications using React",
        owner: "facebook",
        name: "react",
        html_url: "https://github.com/facebook/react",
    }
    render(<MemoryRouter>
        <RepositoriesListItem repository={repository} />
    </MemoryRouter>)
}


test("shows a link to the github homepage for this repository", async () => {
    renderComponent()

    // debug
    // screen.debug();
    // await pause();
    // screen.debug();


    // await screen.findByRole("img", { name: "Javascript" })

    // screen.debug()

    // the last and worst option
    await act(async () => {
        await pause()
    })

})
// debug pause function
// const pause = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 100)
//     })
// }

// act pause function 
const pause = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 100)
    })
}