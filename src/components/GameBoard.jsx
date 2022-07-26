import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "..";
import Dropdown from "./Dropdown";

const GameBoard = ({ index, imgSrc, incrementMatches }) => {
    const nameArrays = [
        ["Waldo", "Buff Guy", "Wizard"],
        ["Waldo", "Backpacker", "Rag Guy"],
    ];
    const [testArray, setTestArray] = useState([]);
    useEffect(() => {
        fillTestArray();
        // Clear display data when index changes which means gameboard is switched
        clearData();
    }, [index]);
    const [display, setDisplay] = useState(false);
    // Used for displaying dropdown
    const [cursorPosition, setCursorPosition] = useState([0, 0]);
    // Cursor position relative to gameboard-img when user clicks
    const [userClick, setUserClick] = useState([0, 0]);

    async function fillTestArray() {
        let tempArray = [];
        const querySnapshot = await getDocs(
            collection(db, `image-position-${index}`)
        );
        querySnapshot.forEach((doc) => {
            tempArray.push(doc.data());
        });
        setTestArray(tempArray);
    }

    function toggleDropdown(cursorX, cursorY) {
        setCursorPosition([cursorX, cursorY]);
        setDisplay(!display);
    }
    useEffect(() => {
        if (display) {
            document.querySelector(
                ".dropdown"
            ).style.left = `${cursorPosition[0]}px`;
            document.querySelector(
                ".dropdown"
            ).style.top = `${cursorPosition[1]}px`;
        }
    }, [display, cursorPosition]);
    const [matches, setMatches] = useState(0);
    function checkMatch(userSelection) {
        const testObject = {
            x: userClick[0],
            y: userClick[1],
            choice: userSelection,
        };
        for (let i = 0; i < testArray.length; i++) {
            const object = testArray[i];
            if (testObject.x >= object.x1 && testObject.x <= object.x2) {
                console.log("layer 1");
                if (testObject.y >= object.y1 && testObject.y <= object.y2) {
                    console.log("layer 2");
                    if (testObject.choice === object.name) {
                        console.log("layer 3");
                        console.log("correct!");
                        setDisplay(!display);
                        incrementMatches()
                        return true;
                    }
                }
            }
        }
        // Close dropdown after choosing a character
        setDisplay(!display);
        return false;
    }
    function clearData() {
        // const menuItems = document.querySelectorAll(".character-menu-item");
        // menuItems.forEach((item) => {
        //     item.style.opacity = "1";
        // });
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
                    let x = Math.round(event.clientX - boxCoord.left);
                    x = Math.round((x / boxCoord.width) * 100);
                    let y = Math.round(event.clientY - boxCoord.top);
                    y = Math.round((y / boxCoord.height) * 100);
                    console.log(x, y);
                    setUserClick([x, y]);
                }}
                className="gameboard-img inactive"
                src={imgSrc}
                alt=""
            />
        </div>
    );
};

export default GameBoard;
