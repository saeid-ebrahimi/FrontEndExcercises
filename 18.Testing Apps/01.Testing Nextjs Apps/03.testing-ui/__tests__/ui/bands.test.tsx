import BandsPageComponent from "@/pages/bands"
import { readFakeData } from "../__mocks__/fakeData"
import { fireEvent, render, screen } from "@testing-library/react"
import { BandLinkHeading } from "@/components/bands/BandLinkHeading"

test("Bands page show bands correctly", async () => {
    const { fakeBands } = await readFakeData()
    render(<BandsPageComponent isrBands={fakeBands} />)
    fakeBands.forEach(bandData => {
        const heading = screen.getByRole("heading", { name: bandData.name.toLowerCase() })
        const description = screen.getByText(bandData.description.toLowerCase())
        expect(heading).toBeInTheDocument()
        expect(description).toBeInTheDocument()
    })
})

test("Bands Links Works Correctly", async () => {
    const { fakeBands } = await readFakeData()
    render(<BandLinkHeading band={fakeBands[0]} />)
    const heading = screen.getByRole("heading", { name: fakeBands[0].name.toLowerCase() })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveAttribute("href", `/bands/${fakeBands[0].id}`)
})