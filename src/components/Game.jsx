import { useEffect, useState } from "react";
import Timer from "./Timer";
import GameBoard from "./GameBoard";
import SubmitTimePopup from "./SubmitTimePopup";

const Game = ({ index, imgSrc }) => {
    useEffect(() => {
        setStart(false);
        document.querySelector(".gameboard-img").classList.add("inactive");
        resetGame();
    }, [index]);
    const [time, setTime] = useState("00:00:00");
    const [start, setStart] = useState(false);
    const [matches, setMatches] = useState(0);
    function toggleGame(status) {
        setStart(status);
        if (status) {
            document
                .querySelector(".gameboard-img")
                .classList.remove("inactive");
        } else {
            document.querySelector(".gameboard-img").classList.add("inactive");
        }
    }
    function incrementMatches() {
        setMatches(matches + 1);
    }
    useEffect(() => {
        if (matches === 3) {
            setStart(false);
            setShowPopup(true);
            document.querySelector(".gameboard-img").classList.add("inactive");
        }
    }, [matches]);
    const [showPopup, setShowPopup] = useState(false);
    function resetGame() {
        setShowPopup(false);
        setTime("00:00:00");
        setMatches(0);
        const menuItems = document.querySelectorAll(".character-menu-item");
        menuItems.forEach((item) => {
            item.style.removeProperty("opacity");
        });
    }
    return (
        <>
            <SubmitTimePopup
                index={index}
                time={time}
                display={showPopup}
                resetGame={resetGame}
            />
            <Timer
                time={time}
                setTime={setTime}
                start={start}
                toggleGame={toggleGame}
            />
            <GameBoard
                index={index}
                imgSrc={imgSrc}
                time={time}
                incrementMatches={incrementMatches}
            />
        </>
    );
};

export default Game;
