import { createGlobalStyle } from 'styled-components';

import PoppinsRegular from "../assets/fonts/Poppins/Poppins-Regular.ttf"
import PoppinsBold from "../assets/fonts/Poppins/Poppins-Bold.ttf";
import PoppinsExtraBold from "../assets/fonts/Poppins/Poppins-ExtraBold.ttf";
import PoppinsBlack from "../assets/fonts/Poppins/Poppins-Black.ttf";

import PromptBlack from "../assets/fonts/Prompt/Prompt-Black.ttf";
import PromptBold from "../assets/fonts/Prompt/Prompt-Bold.ttf";
import PromptExtraBold from "../assets/fonts/Prompt/Prompt-ExtraBold.ttf";
import PromptRegular from "../assets/fonts/Prompt/Prompt-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins-Regular';
        src: url(${PoppinsRegular}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Bold';
        src: url(${PoppinsBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-ExtraBold';
        src: url(${PoppinsExtraBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Black';
        src: url(${PoppinsBlack}) format('truetype');
        font-style: normal;
    }


    //Fonte Prompt
    @font-face {
        font-family: 'Prompt-Black';
        src: url(${PromptBlack}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Prompt-Bold';
        src: url(${PromptBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Prompt-ExtraBold';
        src: url(${PromptExtraBold}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Prompt-Regular';
        src: url(${PromptRegular}) format('truetype');
        font-style: normal;
    }
    
`;