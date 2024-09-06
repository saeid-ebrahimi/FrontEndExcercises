import React from "react";
import {Form, Link, useActionData, useSearchParams, useNavigation} from "react-router-dom";
import classes from "./AuthForm.module.css";

export default function AuthForm(){
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigation();
    const isSubmitting = navigate.state === "submitting";
    const isLogin = searchParams.get("mode") === "login";
    const actionData = useActionData()
    return (
        <>
            <Form method={"post"} className={classes.form}>
                <h1>{isLogin? "Log in": "Create a new user"}</h1>
                {actionData && actionData.errors && (<ul>
                    {Object.values(actionData.errors).map((err) => <li key={err}>{err}</li>)}
                </ul>)}
                {actionData && actionData.message && <p>{actionData.message}</p>}
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input id="password" type="password" name="password" required />
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLogin? "signup": "login"}`}>
                        {isLogin ? "Create a user": 'login'}
                    </Link>
                    <button disabled={isSubmitting}> {isSubmitting? "Submitting..." : "Save"} </button>
                </div>
            </Form>
        </>
    )
}