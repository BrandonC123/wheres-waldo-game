import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "..";
import uniqid from "uniqid";

const SubmitTimePopup = ({ time, display }) => {
    const [playerName, setPlayerName] = useState("");
    return (
        display && (
            <div className="popup">
                <h2>Your time was: {time}</h2>
                <form
                    onSubmit={async function (e) {
                        e.preventDefault();
                        const submitObject = { name: playerName, time: time };
                        console.log(submitObject);
                        await setDoc(
                            doc(db, "leaderboard", `${time}-${uniqid()}`),
                            submitObject
                        );
                        // Submit to firestore
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
                    <button>Skip</button>
                </form>
            </div>
        )
    );
};

export default SubmitTimePopup;
