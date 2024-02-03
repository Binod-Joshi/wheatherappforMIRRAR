import { createContext, useContext, useEffect, useState } from "react";
import WeatherApi from "../components/weatherapi/WeatherApi";

export const Context = createContext();

 export const ContextProviderFunction = ({children}) => {
    const [location, setLocation] =useState("dehradun");
    const [dayList, setDayList] = useState([]);
    const [city, setCity] = useState("");
    const [population, setPopulation] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(true);

    const searchHandler = (e,comingInput) =>{
        e.preventDefault();
        setLocation(comingInput.trim());
    }
    const clickHandler = (title) => {
        setLocation(title);
    }

    const handleStatus = () =>{
        setStatus(!status);
    }

    const fetchApi = async() => {
          setLoading(true)
        try {
            const res = await fetch(WeatherApi(location));
            const data = await res.json();
            console.log(data)
            setDayList(data.list);
            console.log(data.list)
            setCity(data.city.name)
            setPopulation(data.city.population)
            setCountry(data.city.country)
            setLoading(false);
            setError(false)
            

        } catch (error) {
            console.log("error")
            setLoading(false)
            setError(true)
        }
    }
 console.log(city)

    useEffect(() =>{
        fetchApi();
    },[location])

    return(
        <Context.Provider value={{dayList,location,city,population,error,loading,country,status,searchHandler,clickHandler,handleStatus}}>{children}</Context.Provider>
    )
}
export const UserContext = () => {
    return useContext(Context)
}