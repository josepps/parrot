import styled from "styled-components";

export const Main = styled.main`
   {
    margin: auto;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    background: #76bb4c;
    border-radius: 30px;
    color: #fff;
    border: none;
    padding: 0.5% 3%;
   margin-left: auto;
  }

  .paginaUsuario {
    font-family: 'Questrial';
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #c5c5c5;
    padding: 2% 2% 3% 2%;
    font-size: 16px;
      }
  
  div {
    margin-left: 3%;
  }

  h4 {
    color: #76bb4c;
    font-size: 24px;
  }

  .dados p{
    margin-bottom: 0;
  }
 
   h6 {
color: #76BB4C;
margin-left: 3%;
margin-bottom: 0;
  }
  
.horario{
    color: #909090;
    font-size: 14px;
    margin-bottom: 100px;
}

  @media (max-width: 650px) {
    .paginaUsuario {
          button {
          position: absolute;
          top: 80%;
          right: 0;
        }
      }
    }

    .pulblicaçõesUsuarios {
      flex-direction: column;

      div {
        flex-direction: column;
        display: flex;
        align-items: center;
      }
    }
  }
`;
