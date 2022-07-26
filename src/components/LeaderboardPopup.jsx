import { collection, getDocs, limit, query } from "firebase/firestore";
import uniqid from "uniqid";
import db from "..";
import { useEffect, useState } from "react";

const LeaderboardPopup = ({ index, display, toggleLeaderboard }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
        getEntries();
    }, [index]);
    async function getEntries() {
        const arrayRef = collection(db, `leaderboard-${index}`);
        const q = query(arrayRef, limit(10));
        const querySnapshot = await getDocs(q);
        let tempArray = [];
        querySnapshot.forEach((doc) => {
            tempArray.push(doc.data());
        });
        setLeaderboard(tempArray);
    }
    function displayTable() {
        getEntries();
        return leaderboard.map((entry, index) => {
            return (
                <tr key={`${entry.name}-${uniqid()}`}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.time}</td>
                </tr>
            );
        });
    }
    return (
        display && (
            <div className="popup">
                <div className="leaderboard-container column">
                    <a
                        onClick={() => {
                            toggleLeaderboard();
                        }}
                        href="#"
                        className="close-btn"
                    >
                        Close
                    </a>
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Name</th>
                                <th>Time (min:sec:ms)</th>
                            </tr>
                        </thead>
                        <tbody>{displayTable()}</tbody>
                    </table>
                </div>
            </div>
        )
    );
};

export default LeaderboardPopup;
