import "./App.css";
import db from ".";
import { doc, getDoc } from "firebase/firestore";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [display, setDisplay] = useState(false);
    const [cursorPosition, setCursorPosition] = useState([0, 0]);
    const test = doc(db, "image-position", "object-1");
    function toggleDropdown(cursorX, cursorY) {
        setCursorPosition([cursorX, cursorY]);
        setDisplay(!display);
    }
    useEffect(() => {
        if (display) {
            console.log(cursorPosition[1]);
            document.querySelector(
                ".dropdown"
            ).style.left = `${cursorPosition[0]}px`;
            document.querySelector(
                ".dropdown"
            ).style.top = `${cursorPosition[1]}px`;
        }
    }, [display, cursorPosition]);

    return (
        <div className="App">
            <GameBoard toggleDropdown={toggleDropdown} />
            <Dropdown display={display} />
            <Footer />
        </div>
    );
}

export default App;
