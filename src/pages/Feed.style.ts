import styled from "styled-components";

export const Header = styled.header`
    max-width: 1440px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);


    .logoHeader {
        height: 10vh;
        margin-left: 20%;
    }

    .navHeader {
        margin-right: 7%;
    }
     
    .navHeader a:nth-child(1) {
        color: #76BB4C;
        font-size: 1.6rem;
        text-decoration: none;
        margin-right: 10px;
    }

    .navHeader a:nth-child(2){
        text-decoration: none;
        color: #6033AA;
        font-size: 1.2rem;
    }

    @media (max-width: 650px) {
    
        .logoHeader {
        height: 6vh;
    }

        .navHeader {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
`;

export const Main =styled.main`
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .formPublicação {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-width: 0px 1px 1px 1px;
        border-style: solid;
        border-color: #C5C5C5;
        padding: 3% 2% 4% 2%;

        form {
            margin-left: 3%;
            width: 80%;
            position: relative;

            input {
                width: 100%;
                min-height: 7vh;
                border: 1px solid #8BC34A;
                border-radius: 10px;
            }

            button {
                background: #6033AA;
                border-radius: 30px;
                color: #fff;
                border: none;
                padding: 0.5% 5%;
                position: absolute;
                top: 120%;
                right: 0;
            }
        }
    }

    .pulblicaçõesFeed {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        border-width: 0px 1px 1px 1px;
        border-style: solid;
        border-color: #C5C5C5;
        padding: 2% 2% 3% 2%;

        div {
            margin-left: 3%;

            h4 {
                color: #76BB4C;
            }

            span {
                font-size: 0.8rem;
                color: #919191;
            }

            p {
                margin-top: 2%;
            }
        }
    }

    @media (max-width: 650px) {

        .formPublicação {
        form {
            height: 10vh;
            position: relative;

            button {
                position: absolute;
                top: 80%;
                right: 0;
            }
           
        }}

        .pulblicaçõesFeed {
            flex-direction: column;
            
            div {
                flex-direction: column;
                display: flex;
                align-items: center;
            }
        
        }
    }
`;