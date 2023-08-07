function Fruits(props){
    return(
        <div>
            {props.fruits.map(fruit => <p key={fruit.id}>{fruit.fruitName}</p>)}
        </div>
    )
}

export default Fruits;