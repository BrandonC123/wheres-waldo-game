import "./App.css";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import CharacterMenu from "./components/CharacterMenu";
import Game from "./components/Game";

function App() {
    document.title = "Where's Waldo";
    const [imgSrc, setImgSrc] = useState("/img/gameboard-1.jpg");
    const menuImgSrcArray = [
        [
            { name: "Waldo", imgSrc: "/img/waldo1.jpg" },
            { name: "Buff Guy", imgSrc: "/img/buff-guy.jpg" },
            { name: "Wizard", imgSrc: "/img/wizard.jpg" },
        ],
        [
            { name: "Waldo", imgSrc: "/img/waldo2.jpg" },
            { name: "Backpacker", imgSrc: "/img/backpacker.jpg" },
            { name: "Rag Guy", imgSrc: "/img/rag-guy.jpg" },
        ],
    ];
    const [gameboardIndex, setGameBoardIndex] = useState(1);

    return (
        <div className="overall-container">
            <Header
                setImgSrc={setImgSrc}
                setGameBoardIndex={setGameBoardIndex}
            />
            {/* <Timer />
            <GameBoard index={gameboardIndex} imgSrc={imgSrc} /> */}
            <Game index={gameboardIndex} imgSrc={imgSrc} />
            <CharacterMenu imgArray={menuImgSrcArray[gameboardIndex - 1]} />
            <Footer />
        </div>
    );
}

export default App;
