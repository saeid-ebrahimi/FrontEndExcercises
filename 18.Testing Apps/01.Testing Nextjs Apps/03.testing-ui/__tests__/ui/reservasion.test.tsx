import { render, screen, waitFor } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";
import { fakeUserReservations } from "../__mocks__/fakeData/userReservations";

test("reservation page shows correct number of available seats", async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const heading = screen.findByRole("heading", { name: "Reserve your seats for".toUpperCase() })
    waitFor(() => expect(heading).toBeInTheDocument())

    const concertNameHeading = screen.findByRole("heading", { name: fakeUserReservations[0].show.band.name.toUpperCase() })
    waitFor(() => expect(concertNameHeading).toBeInTheDocument())

    const showDate = screen.findByText((new Date()).toDateString())

    waitFor(() => expect(showDate).toBeInTheDocument())

    const seatCountText = screen.findByText(`${fakeUserReservations[0].show.band} seats left`);
    waitFor(() => expect(seatCountText).toBeInTheDocument());

    // const inputSelector = screen.findByRole("")
    // waitFor(()=> expect(inputSelector).toBeInTheDocument())

    const purchaseButton = await screen.findByRole("button", { name: /purchase/i })
    expect(purchaseButton).toBeInTheDocument();
});

test("reservation page shows 'sold out' message and NO purchase button if there are no seats available", async () => {
    render(<Reservation showId={1} submitPurchase={jest.fn()} />)
    const soldOutMessage = await screen.findByRole("heading", { name: /sold out/i })
    expect(soldOutMessage).toBeInTheDocument();

    const purchaseButton = screen.queryByRole("button", { name: /purchase/i })
    expect(purchaseButton).not.toBeInTheDocument();
})