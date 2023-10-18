import {useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_RESPONSE = {
    m1:{
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    m2:{
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    m3:{
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    m4:{
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    }
}
const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();
    useEffect( () => { // cannot use async in use effect function
        const fetchMeals = async () => {
            setIsLoading(true)
            // const response = await fetch("https://react-http6b4a6.firebase.com/meals.json");
            // if (!response.ok){
            //     throw new Error("Something went wrong while fetching data")
            // }
            // const responseData = await response.json();
            const loadedMeal = [];
            for (const key in DUMMY_RESPONSE){
                loadedMeal.push({
                    id:key,
                    name: DUMMY_RESPONSE[key].name,
                    description: DUMMY_RESPONSE[key].description,
                    price:DUMMY_RESPONSE[key].price
                })
            }
            // load response to array
            // for (const key in responseData){
            //     loadedMeal.push({
            //         id:key,
            //         name: responseData[key].name,
            //         description: responseData[key].description,
            //         price:responseData[key].price
            //     })
            // }
            setMeals(loadedMeal)
            setIsLoading(false)
        }

        fetchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, [])
    if(isLoading){
        return <section className={classes['meals-is-loading']}>
            <p>Loading...</p>
        </section>
    }
    if (httpError){
        return <section className={classes['meals-error']}>
            <p>{httpError}</p>
        </section>
    }
    const mealsList = meals.map(meal => (
        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>))
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )

}
export default AvailableMeals;