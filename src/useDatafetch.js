import axios from 'axios';
import {useEffect, useState} from 'react';

const useDatafetch = () =>{
    const url_2 = "https://restcountries.eu/rest/v2/all";
    const url="https://disease.sh/v3/covid-19/all";
    const [datas,setDatas] = useState([]);
    const [country,setCountry]=useState([]);
    const [loading,setLoading]=useState(true);
    const fetch = async () =>{
        const {data} = await axios.get(url);
        setDatas(data);
        //console.log(datas);
        const details = await axios('https://corona.lmao.ninja/v3/covid-19/countries');
        setCountry(details.data);
        setLoading(false);
   };
   useEffect(() => {
    fetch();
    },[]);
   return {datas,country,loading};
}
export default useDatafetch;