import styled from "styled-components";

export const MainLogin = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background:rgba(0, 0, 0, 0.8) url(./img/BACKGROUND.png);
    background-size: 100vw 100vh;
    

    section{
        width: 25vw;
        height: auto;;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;

        img {
            margin-top: 10%;
            height: 30%;
        }

        h3 {
            text-transform: uppercase;
            margin: 4% 0 8% 0;
            font-weight: 400;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
            
                input {
                text-align: center;
                margin-bottom: 10%;
                border: 1px solid #919191;
                border: 1px solid #919191;
                border-radius: 10px;
                padding: 3% 10%;
            }
            }

            a {
                padding: 1.5% 23%;
                border: none;
                background: #76BB4C;
                border-radius: 10px;
                margin-bottom: 10%;
            }
        }

        a {
            color: #555555;
            text-decoration: none;
        }    
    }

    @media (max-width: 900px) {
        section {
            width: 40vw;
        }
        
    }

    @media (max-width: 550px) {

    background:rgba(0, 0, 0, 0.8) url(./img/BACKGROUND.png);

        section {
            width: 70vw;
        }
    }
`;