import React from "react";
import NavBar from "../Components/NavBar";
import Image4 from "../Images/Placeholder004.jpg";
import Image5 from "../Images/Placeholder005.jpg";
import Image6 from "../Images/Placeholder006.jpg";
import Image7 from "../Images/Placeholder007.jpg";

export default function Lofi() {
    let lofiBeats = [
        {
            station: "LoFi Beats Work/Study",
            stream: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
            channel: "LoFi Girl",
            genre: "LoFi Beats",
            preview: <img src={Image4} alt="Opens Lofi Beats Work/Study on YouTube"/>
        },
        {
            station: "LoFi Beats Sleep/Chill",
            stream: "https://www.youtube.com/watch?v=rUxyKA_-grg",
            channel: "LoFi Girl",
            genre: "LoFi Beats",
            preview: <img src={Image5} alt="Opens Lofi Beats Sleep/Chill on YouTube"/>
        },
    
        {
            station: "YBCinema Zen Mode",
            stream: "https://www.youtube.com/watch?v=jCV-wapoXh4",
            channel: "LoFi Girl",
            genre: "LoFi Beats",
            preview: <img src={Image6} alt="Opens Zen Mode on YouTube"/>
        },
        {
            station: "YBCinema Stress Relief",
            stream: "https://www.youtube.com/watch?v=uyE07wjYHoI",
            channel: "LoFi Girl",
            genre: "LoFi Beats",
            preview: <img src={Image7} alt="Opens Stress Relief on YouTube"/>
        },
        {
            station: "Space Lofi Hip Hop Radio",
            stream: "https://www.youtube.com/watch?v=Qt0-9mO-ZXY",
            channel: "LoFi Geek",
            genre: "LoFi Beats",
            preview: <img src={Image4} alt="Opens NightRide FM on YouTube"/>
        },
        {
            station: "Lofi Cafe",
            stream: "https://www.youtube.com/watch?v=ORBwkXsUNEs",
            channel: "LoFi Geek",
            genre: "LoFi Beats",
            preview: <img src={Image7} alt="Opens LoFi Cafe on YouTube"/>
        },
    
    ];
    let lofi = lofiBeats;

    return (
        <div className="App-header">
        <NavBar/>
            {lofi.map((streams) => (
                <ul>
                    <ul>{streams.preview}</ul>
                    <a className="App-link" href={streams.stream} target="_blank" rel="noreferrer" alt="a place beyond"><p >{streams.station}</p></a>
                    <li> Channel: {streams.channel} </li>
                    <li> Genre: {streams.genre} </li>
                </ul>
            ))}
        </div>
    )
}