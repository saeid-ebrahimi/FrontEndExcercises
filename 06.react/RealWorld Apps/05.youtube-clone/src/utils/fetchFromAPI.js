import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params:{
        maxResults: '50',
    }
    ,headers: {
        'X-RapidAPI-Key': '1c0a96effamshfe7cc0657ba9bedp1ddedejsne6fe906e7606',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'Access-Control-Allow-Origin': '*'
    }
};

export const fetchFromAPI = async (url) => {
    try {
        const {data,err} = await axios(`${BASE_URL}/${url}`, options)

        return data;
    }catch (err){
        console.log(err)
    }

}
