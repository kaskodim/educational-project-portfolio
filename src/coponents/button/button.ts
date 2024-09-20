import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Button = styled.button`
    width: 132px;
    height: 42px;
    border-radius: 4px;
    border: 2px solid white;
    padding: 8px 16px 14px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: auto;

    &:hover {
        animation: gradientAnimation 2s ease-in-out;
    }


    @keyframes gradientAnimation {
        0% {
            border-image: linear-gradient(0deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }
        20% {
            border-image: linear-gradient(72deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }
        40% {
            border-image: linear-gradient(144deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }
        60% {
            border-image: linear-gradient(216deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }

        80% {
            border-image: linear-gradient(288deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }
        100% {
            border-image: linear-gradient(360deg, ${Theme.colors.gradient.primaryGr.oneColor}, ${Theme.colors.gradient.primaryGr.twoColor}) 1;
        }
`

