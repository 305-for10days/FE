import { styled } from "styled-components";

interface EmojiItemProps {
    info: { id: number; title: string; src: string };
    onClick: any;
}

const EmojiItem = ({ info, onClick }: EmojiItemProps) => {
    return (
        <EmojiItemStyled onClick={() => onClick(info.id)}>
            <img src={info.src} alt="" />
            <p>{info.title}</p>
        </EmojiItemStyled>
    );
};

const EmojiItemStyled = styled.div`
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;

    & > img {
        width: 100px;
        height: 100px;
        border-radius: 8px;
    }

    & > p {
        margin: 0;
        font-weight: bold;
    }
`;

export default EmojiItem;
