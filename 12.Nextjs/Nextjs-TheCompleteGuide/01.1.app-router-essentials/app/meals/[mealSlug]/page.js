import classes from "./page.module.css";
import Image from "next/image";
import {Fragment} from "react";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";
import {getMeals} from "@/lib/meals";

export function generateMetadata({params}){
    const meal = getMeals(params.mealSlug);
    if (!meal){
        notFound()
    }
    return {
        title:meal.title,
        description: meal.summary,
    }
}
export default async function MealsDetailPage({params}){
    const {mealSlug} = params
    const meal = await getMeal(mealSlug)

    if (!meal){
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>")
    return(
        <Fragment>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by  <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={ {__html: meal.instructions}}></p>
            </main>
        </Fragment>
    )
}