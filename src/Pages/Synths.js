import React from "react";
import NavBar from "../Components/NavBar";
import Image1 from "../Images/Placeholder001.jpg";
import Image2 from "../Images/Placeholder002.jpg";
import Image3 from "../Images/Placeholder003.jpg";
import Image4 from "../Images/Placeholder004.jpg";


export default function Synths() {

    let synthMusic = [
        {
            station: "NightRide FM",
            stream: "https://www.youtube.com/watch?v=cZRj9Sk0IPc",
            channel: "NightRide FM",
            genre: "SynthWave",
            preview: <img src={Image1} alt="Opens NightRide FM on YouTube"/>
        },
        {
            station: "ChillSynth FM",
            stream: "https://www.youtube.com/watch?v=UedTcufyrHc",
            channel: "NightRide FM",
            genre: "SynthWave",
            preview: <img src={Image2} alt="Opens ChillSynth FM on YouTube"/>
        },
        {
            station: "DataWave FM",
            stream: "https://www.youtube.com/watch?v=Y9q6RYg2Pdg",
            channel: "NightRide FM",
            genre: "SynthWave",
            preview: <img src={Image3} alt="Opens DataWave FM on YouTube"/>
        },
        {
            station: "SpaceSynth FM",
            stream: "https://www.youtube.com/watch?v=5-anTj1QrWs",
            channel: "NightRide FM",
            genre: "SynthWave",
            preview: <img src={Image4} alt="Opens SpaceSynth FM on YouTube"/>
        },
        {
            station: "Cyber City Music",
            stream: "https://www.youtube.com/watch?v=NuD3o-HTbc8",
            channel: "Night City",
            genre: "SynthWave",
            preview: <img src={Image1} alt="Opens Cyber City Music on YouTube"/>
        },
        {
            station: "Blade Runner Music",
            stream: "https://www.youtube.com/watch?v=0YiNACjWW-4",
            channel: "Ambient Music Lab",
            genre: "SynthWave",
            preview: <img src={Image3} alt="Opens Blade Runner Music on YouTube"/>
        },
    ];
    let synth = synthMusic;

    return (
        <div className="App-hearder">
        <NavBar/>
            {synth.map((streams) => (
                <ul>
                    <li>{streams.preview}</li>
                    <a className="App-link" href={streams.stream} target="_blank" rel="noreferrer"><p>{streams.station}</p></a>
                    <li> Channel: {streams.channel} </li>
                    <li> Genre: {streams.genre} </li>
                </ul>
            ))}
        </div>
    )
}