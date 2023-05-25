import { css, styled } from "styled-components";

interface ModalProps {
    children: React.ReactNode;
    showModal: boolean;
    onClickCloswModal: any;
}

const Modal = ({ showModal, onClickCloswModal, children }: ModalProps) => {
    return (
        <ModalContainer $showModal={showModal}>
            <ModalBox>
                <div className="modalHeader">
                    <button onClick={onClickCloswModal}>X</button>
                </div>
                {children}
            </ModalBox>
            <ModalBackground onClick={onClickCloswModal} />
        </ModalContainer>
    );
};

interface ModalStyledProps {
    $showModal: boolean;
}

const ModalContainer = styled.div<ModalStyledProps>`
    display: none;
    position: relative;

    ${({ $showModal }) =>
        $showModal &&
        css`
            display: block;
        `}
`;

const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px;
    width: 300px;
    height: 400px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    transform: translate(-50%, -50%);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    z-index: 10;

    & > .modalHeader {
        text-align: right;

        & > button {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border: none;
            background-color: #fff;
            font-weight: bold;
        }
        z-index: 11;
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: lightgray;
    opacity: 0.7;
`;

export default Modal;
