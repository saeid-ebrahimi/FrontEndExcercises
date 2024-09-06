import classes from "./page.module.css"
import {Fragment, Suspense} from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
export const metadata = {
    title:"Al Meals",
    description: "Browse the delicious meals shared by our vibrant community.",

}

function MealsLoading(){
    return <p className={classes.loading}>Fetching data...</p>
}

async function Meals(){
    const meals = await getMeals();
    return (
        <MealsGrid meals={meals}/>
    )
}
export default async function MealsPage(){
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoading/>}>
                    <Meals/>
                </Suspense>
            </main>
        </Fragment>
    )
}