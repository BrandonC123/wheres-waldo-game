import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    useEffect(() => {
        let timer;
        if (start) {
            timer = setInterval(() => {
                setTime(time + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        };
    }, [time, start]);

    return (
        <div className="timer-container">
            Timer: {time} <div></div>
            <button
                onClick={() => {
                    setStart(true);
                }}
            >
                Start
            </button>
            <button
                onClick={() => {
                    setStart(false);
                }}
            >
                Stop
            </button>
        </div>
    );
};

export default Timer;
