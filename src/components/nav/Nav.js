import React from "react";
import { UserContext } from "../../context/Context";
import "./Nav.css";
import Switch from "@mui/material/Switch";
import { TiWeatherPartlySunny } from "react-icons/ti";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Nav = () => {
  const { clickHandler, handleStatus } = UserContext();
  const cities = [
    {
      id: 1,
      title: "Pune",
    },
    {
      id: 3,
      title: "Mahendranagar",
    },

    {
      id: 4,
      title: "Delhi",
    },
  ];
  return (
    <div >
      <div className="nav">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TiWeatherPartlySunny style={{height:"30px",width:"30px",color:"#004dc5"}} />
        </div>

        {cities.map((city, id) => (
          <button key={id} onClick={() => clickHandler(city.title)}>
            {city.title}
          </button>
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>°F</p>
          <Switch {...label} defaultChecked onClick={handleStatus} />
          <p>°C</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
