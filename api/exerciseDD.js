import axios from "axios";
import {rapidApiKey} from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (URL, params) => {
    try {
        const options = {
            method: "GET",
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}

export const fetchExerciseByBodypart = async (bodyPart) => {
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data;
}