import { useEffect, useState } from "react";

const Timer = ({ time, setTime, start, startGame }) => {
    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    // const [time, setTime] = useState("00:00:00");
    // const [start, setStart] = useState(false);
    useEffect(() => {
        if (start) {
            var timer = setInterval(() => {
                setMs(ms + 1);
                convertTime();
            }, 10);
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
            <div></div>
            <button
                onClick={() => {
                    startGame();
                }}
            >
                Start
            </button>
            {/* <button
                onClick={() => {
                    setStart(false);
                }}
            >
                Stop
            </button> */}
        </div>
    );
};

export default Timer;
