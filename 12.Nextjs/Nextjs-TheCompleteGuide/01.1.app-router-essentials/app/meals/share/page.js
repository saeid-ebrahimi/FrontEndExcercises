"use client"
import {Fragment} from "react";
import ImagePicker from "@/components/meals/image-picker";
import {shareMeal} from "@/lib/actions";
import classes from "./page.module.css";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import {useFormState} from "react-dom";


export default function ShareMealsPage(){
    const [state, formAction] = useFormState(shareMeal, {message:null});

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>Favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker name={"image"} label={"Your Image"}/>
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <MealsFormSubmit/>
                    </p>
                </form>
            </main>
        </Fragment>
    )
}