import React from "react";
import { UserContext } from "../../context/Context";
import "./Forecast.css";
import { convertToFahrenheit } from "../temperatureadetails/TemperatureDetails";

const Forecast = ({ title }) => {
  const { dayList,status } = UserContext();
  

  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const dayInWeek = new Date().getDay();
  const afterDay = dayNames.slice(dayInWeek,dayNames.length).concat(dayNames.slice(0,dayInWeek));

  return (
    <div>
      <div className="hourForecast">
        <p className="p">{title}</p>
      </div>
      <hr/>
      <div className="hfs">
        
        {dayList.slice(0, 5).map((day,idx) => {
            const{temp,weather,dt} = day;
            const date = new Date(dt * 1000);
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
          return (

            <div  className="hour" key={idx}>
              <p className="dayafter">{formattedDate}</p>
              <p className="dayafter">{afterDay[idx]}</p>
              <p className="cloudcheck1">{weather[0].main}</p>
              <img
                className="cloudcheckimg"
                src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt=""
              />
              <p className="ptem">{status?<>{temp.min} °C - {temp.max} °C</>:<>{convertToFahrenheit(temp.min)} °F - {convertToFahrenheit(temp.max)} °F</>}</p>
                <p className="ptem">Average: {status?<>{((temp.min + temp.max)/2).toFixed(2)} °C</>:<>{(convertToFahrenheit(temp.min + temp.max)/2).toFixed(2)} °F</>}</p>

            </div>     

          );
        })}

      </div>
    </div>
  );
};

export default Forecast;
