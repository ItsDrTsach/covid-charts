import { colors } from "./constants";
import { createGlobalStyle } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../Atoms/darkmode";

export const GlobalStyles = createGlobalStyle`
    body {
        color:${colors.primaryLight};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.darkGray};
    }

    * {
        box-sizing: border-box;
    }
`;
