import "./App.css";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
    const [imgSrc, setImgSrc] = useState("/img/gameboard-1.jpg");
    const [gameboardIndex, setGameBoardIndex] = useState(1);

    return (
        <div className="overall-container">
            <Header
                setImgSrc={setImgSrc}
                setGameBoardIndex={setGameBoardIndex}
            />
            <GameBoard index={gameboardIndex} imgSrc={imgSrc} />
            <Footer />
        </div>
    );
}

export default App;
