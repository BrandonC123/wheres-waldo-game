import { useEffect, useState } from "react";

const Timer = ({ time, setTime, start, toggleGame }) => {
    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    useEffect(() => {
        if (start) {
            var timer = setInterval(() => {
                setMs(ms + 1);
                convertTime();
            }, 10);
        } else {
            setMs(0);
            setSec(0);
            setMin(0);
        }
        return () => {
            clearInterval(timer);
        };
    }, [ms, sec, min, start]);
    function convertTime() {
        if (ms === 100) {
            setMs(0);
            setSec(sec + 1);
        }
        if (sec === 60) {
            setSec(0);
            setMin(min + 1);
        }
        setTime(
            `${min.toString().padStart(2, "0")}:${sec
                .toString()
                .padStart(2, "0")}:${ms.toString().padStart(2, "0")}`
        );
    }

    return (
        <div className="timer-container">
            Timer: {time}
            <div className="timer-actions">
                <button
                    onClick={() => {
                        toggleGame(true);
                    }}
                    className="action-btn btn"
                >
                    Start
                </button>
                <button
                    onClick={() => {
                        toggleGame(false);
                    }}
                    className="secondary-btn btn"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;
