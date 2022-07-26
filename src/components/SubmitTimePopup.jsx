import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "..";
import uniqid from "uniqid";

const SubmitTimePopup = ({ time, display, resetGame, index }) => {
    const [playerName, setPlayerName] = useState("");
    return (
        display && (
            <div className="submit-time-popup popup">
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
                    className="submit-time-form"
                >
                    <div className="input column">
                        <label htmlFor="submit-name">Enter Name Here:</label>
                        <input
                            onChange={(e) => {
                                setPlayerName(e.target.value);
                            }}
                            type="text"
                            placeholder="Name"
                            id="submit-name"
                        />
                    </div>
                    <div className="submit-time-form-actions">
                        <button className="action-btn btn">Submit</button>
                        <button
                            onClick={() => {
                                resetGame();
                            }}
                            type="button"
                            className="secondary-btn btn"
                        >
                            Skip
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default SubmitTimePopup;
