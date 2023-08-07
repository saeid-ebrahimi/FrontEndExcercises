
import './App.css';
import {useEffect, useState} from "react";

const  data = [
  {
    id:"1",
    title:"Tiramisu",
    description:"The best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price : "$5.00"
  }, {
    id:"2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50"
  },
  {
    id:"3",
    title:"Chocolate mousse",
    description: "Unexplored flavour",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00"
  },
]

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
)
// const topDesserts = data.map(dessert=> {
//   return{
//     content: `${dessert.title}-${dessert.description}`,
//     price: dessert.price
//   }
// })

function App() {
      const listItems = data.map(dessert => {
         const itemText = `${dessert.title} - ${dessert.price}`
         return <li key={dessert.title}>{itemText}</li>
      })
    const [todos, setTodos] = useState([
        {
            id:"todo1",
            createdAt:"18:00"
        },{
            id:"todo2",
            createdAt: "20:30"
        }
    ])
    const reverseOrder = () => {
          setTodos([...todos].reverse())
    }


    
    const [btcData, setBtcData] = useState({})
    useEffect(()=> {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then(response=> response.json())
            .then(jsonData => setBtcData(jsonData.bpi.USD))
            .catch(error=>console.log(error))
    }, [])

  return (
        <div className="App">
            <h1>Little Lemon Restaurant</h1>
            <div>
                <button onClick={reverseOrder}>Reverse</button>
                <table>
                    <tbody>
                    {
                        todos.map((todo, index) => (
                            <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt}/>))}
                    </tbody>
                </table>
            </div>
            <ul>
              {listItems}
            </ul>
            <>
                <h1>Current BTC/USD data</h1>
                <p>Code: {btcData.code}</p>
                <p>Symbol: {btcData.symbol}</p>
                <p>Rate: {btcData.rate}</p>
                <p>Description: {btcData.description}</p>
                <p>Rate Float: {btcData.rate_float}</p>
            </>
        </div>

);
}

export default App;
