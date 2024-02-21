import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1c0a96effamshfe7cc0657ba9bedp1ddedejsne6fe906e7606',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
})