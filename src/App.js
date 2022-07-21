import "./App.css";
import db from ".";
import { doc, getDoc } from "firebase/firestore";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function App() {
    const [imgSrc, setImgSrc] = useState("/img/gameboard-1.jpg");
    const test = doc(db, "image-position", "object-1");

    return (
        <div className="overall-container">
            <Header setImgSrc={setImgSrc} />
            <GameBoard imgSrc={imgSrc} />

            <Footer />
        </div>
    );
}

export default App;
