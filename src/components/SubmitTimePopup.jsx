import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "..";
import uniqid from "uniqid";

const SubmitTimePopup = ({ time, display, resetGame, index }) => {
    const [playerName, setPlayerName] = useState("");
    return (
        display && (
            <div className="popup">
                <h2>Your time was: {time}</h2>
                <form
                    onSubmit={async function (e) {
                        e.preventDefault();
                        const submitObject = { name: playerName, time: time };
                        // Submit to firestore
                        await setDoc(
                            doc(
                                db,
                                `leaderboard-${index}`,
                                `${time}-${uniqid()}`
                            ),
                            submitObject
                        );
                        resetGame();
                    }}
                    className="submit-time form"
                >
                    <div className="input">
                        <label htmlFor="submit-name">Enter Name Here</label>
                        <input
                            onChange={(e) => {
                                setPlayerName(e.target.value);
                            }}
                            type="text"
                            placeholder="Name"
                            id="submit-name"
                        />
                    </div>
                    <button>Submit</button>
                    <button
                        onClick={() => {
                            resetGame();
                        }}
                        type="button"
                    >
                        Skip
                    </button>
                </form>
            </div>
        )
    );
};

export default SubmitTimePopup;
