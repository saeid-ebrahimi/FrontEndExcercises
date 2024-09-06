"use client"
export default function Error({error}){
    console.log("error is ",error)
    return <main className={"error"}>
        <h1>An error occurred!</h1>
        <p>Failed to fetch meals data!</p>
    </main>
}