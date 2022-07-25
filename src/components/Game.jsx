import { useEffect, useState } from "react";
import Timer from "./Timer";
import GameBoard from "./GameBoard";
import SubmitTimePopup from "./SubmitTimePopup";

const Game = ({ index, imgSrc }) => {
    const [time, setTime] = useState("00:00:00");
    const [start, setStart] = useState(false);
    const [matches, setMatches] = useState(0);
    function startGame() {
        setStart(true);
        document.querySelector(".gameboard-img").classList.remove("inactive");
    }
    function incrementMatches() {
        setMatches(matches + 1);
    }
    useEffect(() => {
        if (matches === 3) {
            setStart(false);
            const menuItems = document.querySelectorAll(".character-menu-item");
            menuItems.forEach((item) => {
                item.style.opacity = "1";
            });
            setMatches(0);
            setShowPopup(true);
        }
    }, [matches]);
    const [showPopup, setShowPopup] = useState(false);
    function displaySubmitPopup() {
        setShowPopup(!showPopup);
    }
    return (
        <>
            <SubmitTimePopup time={time} display={showPopup} />
            <Timer
                time={time}
                setTime={setTime}
                start={start}
                startGame={startGame}
            />
            <GameBoard
                index={index}
                imgSrc={imgSrc}
                time={time}
                startGame={startGame}
                incrementMatches={incrementMatches}
                displaySubmitPopup={displaySubmitPopup}
            />
        </>
    );
};

export default Game;
