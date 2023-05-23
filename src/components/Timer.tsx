import { useEffect, useRef, useState } from "react";
import sound from "../assets/sounds/ride.wav";

interface timerProps {
    minutes: string;
    seconds: string;
    milliseconds: string;
}

const Timer = () => {
    const [isStart, setIsStart] = useState<boolean>(false);
    const [time, setTime] = useState<timerProps>({
        minutes: "00",
        seconds: "00",
        milliseconds: "000",
    });
    const intervalRef = useRef<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const timerFormat = (value: number, type: string) => {
        let formatValue = String(value);

        if (type !== "milliseconds" && value < 10) {
            formatValue = "0" + String(value);
        } else if (type == "milliseconds") {
            if (value < 10) {
                formatValue = "00" + String(value);
            } else if (value < 100) {
                formatValue = "0" + String(value);
            }
        }
        return formatValue;
    };

    const startTimer = () => {
        const date: Date = new Date();
        if (!isStart) {
            setIsStart(true);
            const intervalID = setInterval(() => {
                const newDate: Date = new Date();
                const timerDate = new Date(newDate.getTime() - date.getTime());
                const newTime = {
                    minutes: timerFormat(timerDate.getMinutes(), "minutes"),
                    seconds: timerFormat(timerDate.getSeconds(), "seconds"),
                    milliseconds: timerFormat(timerDate.getMilliseconds(), "milliseconds"),
                };
                setTime(newTime);
            }, 100);
            intervalRef.current = Number(intervalID);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsStart(false);
    };

    useEffect(() => {
        if (time.seconds === "05") {
            audioRef.current?.play();
            console.log("10초가 지났습니다");
        }
    }, [time]);

    return (
        <div style={{ color: "black" }}>
            <div>
                {time.minutes}:{time.seconds}:{time.milliseconds}
            </div>
            <audio ref={audioRef} src={sound} />
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>그만</button>
        </div>
    );
};

export default Timer;
