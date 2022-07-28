import {
    collection,
    getDocs,
    limit,
    onSnapshot,
    query,
} from "firebase/firestore";
import uniqid from "uniqid";
import db from "..";
import { useCallback, useEffect, useState } from "react";

const LeaderboardPopup = ({ index, toggleLeaderboard }) => {
    const [leaderboard, setLeaderboard] = useState([]);
    const arrayRef = collection(db, `leaderboard-${index}`);
    const q = query(arrayRef, limit(10));
    useEffect(() => {
        // Only run if
        if (leaderboard.length < index) {
            getEntries();
        }
    }, [index]);
    async function getEntries() {
        const querySnapshot = await getDocs(q);
        let tempArray = [];
        querySnapshot.forEach((doc) => {
            tempArray.push(doc.data());
        });
        setLeaderboard([...leaderboard, tempArray]);
    }
    async function updateLeaderboard() {
        const querySnapshot = await getDocs(q);
        let tempArray = [];
        querySnapshot.forEach((doc) => {
            tempArray.push(doc.data());
        });
        let tempLeaderboard = Array.from(leaderboard);
        tempLeaderboard[index - 1] = tempArray;
        setLeaderboard(tempLeaderboard);
    }
    let calls = 0;
    const unsubscribe = onSnapshot(q, (snapshot) => {
        calls++;
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                if (calls > 1) {
                    updateLeaderboard();
                }
            }
        });
    });
    function displayTable() {
        if (index - 1 < leaderboard.length) {
            return leaderboard[index - 1].map((entry, index) => {
                return (
                    <tr key={`${entry.name}-${uniqid()}`}>
                        <td>{index + 1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.time}</td>
                    </tr>
                );
            });
        }
    }
    return (
        <div className="popup leaderboard-popup hide">
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
    );
};

export default LeaderboardPopup;
