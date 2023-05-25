import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import EmojiItem from "./EmojiItem";
import { EMOJI_DATAS } from "../constants/data";

const ResultInfoBox = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [emoji, setEmoji] = useState<number>(0);

    const handleOnClickShowModal = () => {
        setShowModal(true);
    };

    const handleOnClickEmoji = (id: number) => {
        setEmoji(id);
        setShowModal(false);
    };

    return (
        <ResultInfoBoxStyled>
            <InfoBoxStyled>
                <div className="imageWrap" onClick={handleOnClickShowModal}>
                    {emoji !== 0 && <img src={EMOJI_DATAS.find((item) => item.id === emoji)?.src} alt="" />}
                </div>
                <div className="desc">
                    <strong>이번운동으로</strong>
                    <br />
                    <strong>340kcal</strong>를
                    <br />
                    소비했습니다.
                </div>
            </InfoBoxStyled>
            <p>표정 추가하기</p>

            <Modal showModal={showModal} onClickCloswModal={() => setShowModal(false)}>
                <EmojiModalStyled>
                    {EMOJI_DATAS.map((info) => (
                        <EmojiItem key={info.id} info={info} onClick={handleOnClickEmoji} />
                    ))}
                </EmojiModalStyled>
            </Modal>
        </ResultInfoBoxStyled>
    );
};

const ResultInfoBoxStyled = styled.div`
    & > p {
        margin: 0;
        padding-top: 8px;
        padding-left: 20px;
        font-weight: bold;
        font-size: 12px;
        text-align: left;
    }
`;

const InfoBoxStyled = styled.div`
    display: flex;
    gap: 28px;
    align-items: center;

    & > .imageWrap {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 110px;
        border: 1px solid #000;
        border-radius: 50%;
        overflow: hidden;

        & > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }

    & > .desc {
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: left;

        & strong {
            color: #3888ff;
        }
    }
`;

const EmojiModalStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    height: calc(400px - 50px);
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default ResultInfoBox;
