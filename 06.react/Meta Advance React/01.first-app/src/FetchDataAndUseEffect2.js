import React from "react"

function App() {
    const [user, setUser] = React.useState([])
    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => setUser(data))
    }
    React.useEffect(() => {
        fetchData()
    }, [])
    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ):(
        <h1>Data Pending</h1>
    )
}