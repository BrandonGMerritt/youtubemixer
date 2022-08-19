import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navigation-alignment">
            <Link className="Nav-link" to={"/"}>TurnTable</Link>
            <Link className="Nav-link" to={"/Synths"}>SynthWave</Link>
            <Link className="Nav-link" to={"/Lofi"}>LoFI</Link>
        </nav>
    )
}
