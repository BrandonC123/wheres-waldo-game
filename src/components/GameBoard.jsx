import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "..";
import Dropdown from "./Dropdown";

const GameBoard = ({ index, imgSrc }) => {
    const nameArrays = [
        ["Waldo1", "test", "test"],
        ["Waldo2", "test", "test"],
    ];
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
    function checkMatch(userSelection) {
        let match = false;
        const testObject = {
            x: userClick[0],
            y: userClick[1],
            choice: userSelection,
        };
        console.log(testObject);
        testArray.forEach((object) => {
            console.log(object);
            if (testObject.x >= object.x1 && testObject.x <= object.x2) {
                console.log("layer 1");
                if (testObject.y >= object.y1 && testObject.y <= object.y2) {
                    console.log("layer 2");
                    if (testObject.choice === object.name) {
                        console.log("layer 3");
                        match = true;
                        console.log("correct!");
                    }
                }
            }
        });
        // Close dropdown after choosing a character
        setDisplay(!display);
    }

    return (
        <div className="container">
            <Dropdown
                display={display}
                checkMatch={checkMatch}
                nameArray={nameArrays[index - 1]}
            />
            <img
                onClick={(event) => {
                    toggleDropdown(event.pageX, event.pageY);
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
