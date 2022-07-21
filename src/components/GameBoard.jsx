import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "..";
import Dropdown from "./Dropdown";

const GameBoard = ({ index, imgSrc }) => {
    const [testArray, setTestArray] = useState([]);
    useEffect(() => {
        fillTestArray();
    }, []);
    const [display, setDisplay] = useState(false);
    // Used for displaying dropdown
    const [cursorPosition, setCursorPosition] = useState([0, 0]);
    // Cursor position relative to gameboard-img when user clicks
    const [userClick, setUserClick] = useState([0, 0]);

    async function fillTestArray() {
        const querySnapshot = await getDocs(collection(db, "image-position-1"));
        querySnapshot.forEach((doc) => {
            setTestArray([...testArray, doc.data()]);
        });
    }

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
        <div className="container">
            <Dropdown display={display} />
            <img
                onClick={(event) => {
                    toggleDropdown(event.clientX, event.clientY);
                    const boxCoord = event.target.getBoundingClientRect();
                    const x = Math.round(event.clientX - boxCoord.left);
                    const y = Math.round(event.clientY - boxCoord.top);
                    setUserClick([x, y]);
                }}
                className="gameboard-img"
                src={imgSrc}
                alt=""
            />
        </div>
    );
};

export default GameBoard;
