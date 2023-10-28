import React from "react";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    let title ="An Error occurred !";
    let message = "Something went wrong!";

    if (error.status === 500){
        message = JSON.parse(error.date.message)
    }else if(error.status === 404){
        title = "Not found";
        message = "Could not find resource or page";
    }
    return <>
        <MainNavigation/>
        <main>
            <PageContent title={title}>
                <p>{message}</p>

            </PageContent>
        </main>
    </>
};
export default ErrorPage;