function CurrentMessage(props){
    //const day = new Date().getDay()
    //if(day >= 1 && day<=5)
    if(props.day >= 1 && props.day <= 5)
        return <Workdays/>
    return <Weekends/>
}

function CurrentMessage2({day}){
    const weekday = (day >= 1 && day <= 5)
    const weekend = (day >= 6 && day <= 7)
    let message
    if(weekday){
        message = <Workdays/>
    }else if(weekend){
        message = <Weekends/>
    }else{
        message = <ErrorComponent/>
    }
    return (
        <div>
            {message}
        </div>
    )
}