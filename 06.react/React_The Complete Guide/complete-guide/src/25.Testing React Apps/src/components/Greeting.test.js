import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
    test("renders 'Hello World' as a text", () => {
        // Arrange
        render(<Greeting/>)

        // Act
        // .. nothing

        // Assert
        // screen.getByText('/Hello World/i')
        const helloWorldElement = screen.getByText('Hello World', {exact: false})
        expect(helloWorldElement).toBeInTheDocument();
    });
    test("renders 'good to see you' text if the button was Not clicked", () => {
        // Arrange
        render(<Greeting/>)

        // Act => nothing

        // Assertion
        const greetingText = screen.getByText("good to see you!", {exact:false});
        expect(greetingText).toBeInTheDocument();
    })
    test("render 'Change Text' as text if the button was clicked", () => {
        // Arrange
        render(<Greeting/>)
        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement)

        // Assertion
        const changeText = screen.getByText("Change Text!", {exact: true})
        expect(changeText).toBeInTheDocument();
    })
    test("not render 'good to see you' text if the button was clicked", () => {
        // Arrange
        render(<Greeting/>)
        // Act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        // Assertion
        const outputElement = screen.queryByText("good to see you!", {exact: false})
        expect(outputElement).toBeNull();
    })

})