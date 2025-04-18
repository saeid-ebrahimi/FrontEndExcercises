import { render, screen } from "@testing-library/react";
import BandPageComponent from "@/pages/bands/[bandId]"
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("band component displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandPageComponent band={fakeBands[0]} error={null} />)

    const heading = screen.getByRole("heading", { name: /the wandering bunnies/i })
    expect(heading).toBeInTheDocument()

    // more test here
})

test("band component displays errors", () => {
    render(<BandPageComponent band={null} error={"Everything Is Fine"} />)
    const error = screen.getByRole("heading", { name: /everything is fine/i })
    expect(error).toBeInTheDocument()
})