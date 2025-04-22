import { UserReservations } from "@/components/user/UserReservations"
import { render, screen } from "@testing-library/react"

test("Displays reservations and 'purchase more' button when reservation exist", async () => {
    render(<UserReservations userId={0} />)
    const purchaseButton = await screen.findByRole("button", {
        name: /purchase more tickets/i,
    })

    expect(purchaseButton).toBeInTheDocument()
})