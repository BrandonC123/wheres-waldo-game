import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CharacterMenu from "./components/CharacterMenu";
import Game from "./components/Game";
import LeaderboardPopup from "./components/LeaderboardPopup";

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
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    function toggleLeaderboard() {
        document.querySelector(".leaderboard-popup").classList.toggle("hide");
    }

    return (
        <div className="overall-container">
            <Header
                setImgSrc={setImgSrc}
                setGameBoardIndex={setGameBoardIndex}
                toggleLeaderboard={toggleLeaderboard}
            />
            <LeaderboardPopup
                index={gameboardIndex}
                display={showLeaderboard}
                toggleLeaderboard={toggleLeaderboard}
            />
            <Game index={gameboardIndex} imgSrc={imgSrc} />
            <CharacterMenu imgArray={menuImgSrcArray[gameboardIndex - 1]} />
        </div>
    );
}

export default App;
