import React, { useRef, useState } from "react";
import { css, styled } from "styled-components";
import WorkOutItem, { WorkOutItemProps } from "./WorkOutItem";

const SwipeWorkOutBox = ({ info }: WorkOutItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const xRef = useRef(0);
    const [swipeValue, setSwipeValue] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const maxSwipe = 21;

    const dragStart = (e: any) => {
        setIsDrag(true);
        xRef.current = e?.clientX ?? e.changedTouches[0]?.clientX;
    };

    const dragMove = (e: any) => {
        if (isDrag) {
            const clientX = e?.clientX ?? e.changedTouches[0]?.clientX;
            const value = swipeValue + (clientX - xRef.current);

            if (ref.current) {
                if (value < -maxSwipe) {
                    setSwipeValue(-maxSwipe);
                    ref.current.style.transform = `translateX(${-maxSwipe}px)`;
                } else if (swipeValue > maxSwipe) {
                    setSwipeValue(maxSwipe);
                    ref.current.style.transform = `translateX(${maxSwipe}px)`;
                } else if (-maxSwipe < value && swipeValue < maxSwipe) {
                    setSwipeValue(value);
                    ref.current.style.transform = `translateX(${value}px)`;
                }
            }
        }
    };

    const dragEnd = (e: any) => {
        setIsDrag(false);

        if (-maxSwipe !== swipeValue && swipeValue !== maxSwipe) {
            setSwipeValue(0);
        }
        if (ref.current) ref.current.style.transform = `translateX(${swipeValue}px)`;
    };

    return (
        <SwipeBoxStyled $swipe={swipeValue}>
            <div ref={ref} onMouseDown={dragStart} onMouseMove={dragMove} onMouseUp={dragEnd} onMouseLeave={dragEnd} onTouchStart={dragStart} onTouchMove={dragMove} onTouchEnd={dragEnd}>
                <WorkOutItem info={info} isActive={swipeValue === maxSwipe} isCancel={swipeValue === -maxSwipe} />
            </div>
        </SwipeBoxStyled>
    );
};

interface SwipeStyleProps {
    $swipe: number;
}

const SwipeBoxStyled = styled.div<SwipeStyleProps>`
    padding: 0 21px;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 8px;

    ${({ $swipe }) => {
        if ($swipe < 0) {
            return css`
                border-color: #fb5e5e;
                background-color: #fb5e5e;
            `;
        } else if ($swipe > 0) {
            return css`
                border-color: #3888ff;
                background-color: #3888ff;
            `;
        }
    }}

    & > div {
        cursor: pointer;
    }
`;

export default SwipeWorkOutBox;
