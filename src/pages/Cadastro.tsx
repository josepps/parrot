import { MainLogin } from './Cadastro.style';
import { Link } from "react-router-dom";
import api from '../services/api';


const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputAp = document.querySelector('#ap');

function Cadastro() {

    const BtnCadastrar = document.getElementById("cadastrar");
    BtnCadastrar?.addEventListener("click", (event)=> {
        event.preventDefault();

        api.post('/user', {
            "name": inputNome?.value,
            "email": inputEmail?.value,
            "password": inputSenha?.value,
            "apartment": inputAp?.value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
    });
    return (
        <MainLogin>
            <section>
                <img src="..\img\logoVerticalColorido.png" alt="" />
                <h3>CADASTRO</h3>
                <form >
                    <div>
                        <label htmlFor="Nome"></label>
                        <input id='nome' type="text" aria-describedby='Nome' placeholder="Nome"/>
                    </div>
                    <div>
                        <label htmlFor="Email"></label>
                        <input id='email' type="email" aria-describedby='Email' placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="Senha"></label>
                        <input id='senha' type="password" aria-describedby='Senha' placeholder="senha"/>
                    </div>
                    <div>
                        <label htmlFor="Senha"></label>
                        <input type="password" aria-describedby='Senha' placeholder="Confirmar senha"/>
                    </div>
                    <div>
                        <label htmlFor="Unidade"></label>
                        <input id='ap' type="text" aria-describedby='Unidade' placeholder="unidade/apartamento"/>
                    </div>
                    <div>
                        <label htmlFor="Link"></label>
                        <input type="text" aria-describedby='Link' placeholder="link da foto"/>
                    </div>
                    <button id='cadastrar'> Cadastrar </button>
                    
                </form>
            </section>
        </MainLogin>
    )

};

export default Cadastro;