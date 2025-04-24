import { render, screen } from "@testing-library/react";
import BandPageComponent from "@/pages/bands/[bandId]"
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("band component displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandPageComponent band={fakeBands[0]} error={null} />)

    const heading = screen.getByRole("heading", { name: /the wandering bunnies/i })
    const text = screen.getByText(/blistering world music, supported by a moody water glass orchestra/i)
    const image = screen.getByRole("img", { name: "band photo" })
    const caption = screen.getByText(/photo by/i)
    const link = screen.getByRole("link", { name: "Adina Voicu" })
    expect(heading).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument();
    expect(caption)
    expect(link).toBeInTheDocument();
})

test("band component displays errors", () => {
    render(<BandPageComponent band={null} error={"Everything Is Fine"} />)
    const error = screen.getByRole("heading", { name: /everything is fine/i })
    expect(error).toBeInTheDocument()
})