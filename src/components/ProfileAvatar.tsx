import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { authLoginState } from "../recoil/selectors/authSelector";
import { useNavigate } from "react-router-dom";
import { initialize } from "../recoil/atoms/authState";
import { useRef, useState } from "react";

const ProfileAvatar = () => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useRecoilState(authLoginState);
    const tabsRef = useRef<HTMLUListElement>(null);
    const [isShow, setIsShow] = useState<boolean>(false);

    const handleOnClickProfile = () => {
        if (tabsRef.current) {
            if (!isShow) {
                setIsShow(!isShow);
                tabsRef.current.style.display = "block";
            } else {
                setIsShow(!isShow);
                tabsRef.current.style.display = "none";
            }
        }
    };

    const handleOnClickLogout = () => {
        localStorage.removeItem("token");
        setAuthState({ ...initialize, isLoggedIn: false, token: "" });
        navigate("/");
    };

    return (
        <ProfileAvatarStyled>
            <AvatarStyled onClick={handleOnClickProfile}>{authState.user.USER_NICK}</AvatarStyled>
            <ul ref={tabsRef}>
                <li onClick={handleOnClickLogout}>로그아웃</li>
            </ul>
        </ProfileAvatarStyled>
    );
};

const ProfileAvatarStyled = styled.div`
    position: relative;

    & > ul {
        display: none;
        text-align: right;
        list-style: none;
        position: absolute;
        top: 80%;
        right: 12px;
        padding: 4px;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        background-color: #fafafa;
        white-space: nowrap;

        & li {
            cursor: pointer;
            padding: 10px 16px;
            font-size: 16px;
            border-radius: 6px;
            font-weight: bold;
        }
    }
`;

const AvatarStyled = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background-color: #3888ff;
`;

export default ProfileAvatar;
