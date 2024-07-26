import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '5a33b6e402msh6cfbea395c7906fp146300jsnfa107f247949',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI= async(url) =>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options);

    return data;

  }