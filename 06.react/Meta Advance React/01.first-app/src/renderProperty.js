import "./App.css"
import {useEffect , useState} from "react";

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        if(url.includes("deserts")){
            setData(["cake", "ice cream", "pie", "brownie"])
        }else{
            setData(["water", "soda", "juice"])
        }
    }, [])
    return render(data)
}

const DessertCount = () => {
    return (
        <DataFetcher
            url={"https://littlelemon/desserts"}
            render={(data) => <p>{data.length} desserts</p>}
        />
    )
}

const DrinkCount = () => {
    return (
        <DataFetcher
            url={"https:://littlelemon/drinks"}
            render={(data) => <p>{data.length} deserts</p>}
        />
    )
}

function App(){
    return(
        <div className="App">
            <header className={"Header"}>Little Lemon Restaurant</header>
            <DessertCount/>
            <DrinkCount/>
        </div>
    )
}


// export default App