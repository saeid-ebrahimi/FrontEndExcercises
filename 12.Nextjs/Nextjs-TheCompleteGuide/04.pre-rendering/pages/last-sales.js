import {useEffect, useState} from "react";
import useSWR from "swr";
const fetcher = async (url) =>{
    const response = await fetch(url);
    const data = await response.json()
    return data
}
const transformData = (data) => {
    const transformedSales = []
    if (data){
        for (const key in data){
            transformedSales.push({ id:key, name: data[key].username, volume: data[key].volume })
        }
    }
    return transformedSales
}
export default function LastSalesPage(props){
    const [sales, setSales] = useState(props.sales)
    const {data, error} = useSWR('https://nextjs-course-a7016-default-rtdb.firebaseio.com/sales.json', fetcher);
    useEffect(()=> {
        if (data){
            const transformedData = transformData(data)
            setSales(transformedData)
        }
    }, [data])
    if (error){
        return <p>Failed to load</p>
    }

    if (!sales && !data){
        return <p>Loading...</p>
    }
    return <ul>
        {sales.map(sale => <li key={sale.id}>{sale.name} - {sale.volume}</li>)}
    </ul>
}
export async function getStaticProps(context){
    const data = fetcher('https://nextjs-course-a7016-default-rtdb.firebaseio.com/sales.json');
    if (!data){
        return { notFound:true}
    }
    const transformedData = transformData(data)
    return {
        props: {
            sales: transformedData,
        },
        revalidate: 10
    }

}
function LastSales2Page(props){
    const [sales, setSales] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect( () => {
       const fetchAPI = async() => {
           setIsLoading(true)
           try{
               const response = await fetch("https://nextjs-course-a7016-default-rtdb.firebaseio.com/sales.json")
               const data = await response.json()
               const transformedSales = []
               for (const key in data){
                   transformedSales.push({ id:key, name: data[key].username, volume: data[key].volume })
               }
               // console.log(transformedSales)
               setSales([...transformedSales])

           }catch (error){
               console.log(error)
           }
           setIsLoading(false)
       }
       fetchAPI()
    }, [])
    if (isLoading){
        return <p>Loading...</p>
    }
    if (!sales){
        return <p>No data yet</p>
    }
    return <ul>
        {sales.map(sale => <li key={sale.id}>{sale.name} - {sale.volume}</li>)}
    </ul>
}