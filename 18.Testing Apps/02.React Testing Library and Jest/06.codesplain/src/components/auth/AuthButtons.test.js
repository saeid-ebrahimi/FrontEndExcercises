
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

describe("when user is not signed in", () => {
    createServer([{ path: "api/user", res: () => { user: null } }])


    test("sign in and sign up are visible", async () => {

    })

    test("sign out is not visible", async () => {

    })
})

describe("when user is signed in", () => {
    createServer([{
        path: "api/user", res: () => {
            return { user: { id: 3, email: "test@test.com" } }
        }
    }])

    test("sign in and sign up are not visible", async () => {

    })

    test("sign out is visible", async () => {

    })

})