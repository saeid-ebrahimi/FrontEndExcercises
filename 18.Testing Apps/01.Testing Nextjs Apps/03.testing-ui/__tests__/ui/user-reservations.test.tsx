import { UserReservations } from "@/components/user/UserReservations"
import { render, screen } from "@testing-library/react"

test("Displays reservations and 'purchase more' button when reservation exist", async () => {
    render(<UserReservations userId={1} />)

    const purchaseButton = await screen.findByRole("button", {
        name: /purchase more tickets/i,
    })

    expect(purchaseButton).toBeInTheDocument()
})

test("Displays no reservation and 'purchase' button when no reservations exists", async () => {
    render(<UserReservations userId={0} />)

    const purchaseButton = await screen.findByRole("button", {
        name: /purchase tickets/i
    })

    expect(purchaseButton).toBeInTheDocument()

    const ticketHeading = screen.queryByRole("heading", {
        name: /your tickets/i
    })

    expect(ticketHeading).not.toBeInTheDocument()
})