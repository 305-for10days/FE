import { useEffect, useRef, useState } from "react";
import sound from "../assets/sounds/ride.wav";
import { styled } from "styled-components";

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
        milliseconds: "00",
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
            formatValue = formatValue.substring(0, 2);
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
            }, 90);
            intervalRef.current = Number(intervalID);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsStart(false);
    };

    const handleOnClickTimer = () => {
        if (isStart) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    useEffect(() => {
        if (time.seconds === "05") {
            audioRef.current?.play();
            console.log("10초가 지났습니다");
        }
    }, [time]);

    return (
        <TimerBoxStyled onClick={handleOnClickTimer}>
            <p>
                {time.seconds}:{time.milliseconds}
                <audio ref={audioRef} src={sound} />
            </p>
        </TimerBoxStyled>
    );
};

const TimerBoxStyled = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid #3888ff;
    border-radius: 8px;
    text-align: center;

    & > p {
        margin: 0;
        width: 200px;
        color: #3888ff;
        font-size: 50px;
    }
`;

export default Timer;
