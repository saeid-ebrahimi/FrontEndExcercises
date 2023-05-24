let fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Data Completed")
            resolve( {id:1, message: "Fetching Data Completed"})
        }, 3000)

    })
}

const parseData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("parsing data")
            let parsedOutput = `Parsed the data for id :${data.id} and with message: ${data.message}`
            resolve({parsed: parsedOutput})
        }, 3000)
    })
}


const showData = (response) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("show data:", response.parsed)
            resolve(response)
        }, 3000)

    })

}

fetchData()
    .then(parseData)
    .then(showData)