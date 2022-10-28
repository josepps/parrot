import { MainLogin } from './Cadastro.style';
import { Link } from "react-router-dom";
import React from 'react';

function Cadastro() {

    return (
        <MainLogin>
            <section>
                <img src="..\img\logoVerticalColorido.png" alt="" />
                <h3>CADASTRO</h3>
                <form >
                    <div>
                        <label htmlFor="Nome"></label>
                        <input type="text" aria-describedby='Nome' placeholder="Nome"/>
                    </div>
                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" aria-describedby='Email' placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="Senha"></label>
                        <input type="password" aria-describedby='Senha' placeholder="senha"/>
                    </div>
                    <div>
                        <label htmlFor="Senha"></label>
                        <input type="password" aria-describedby='Senha' placeholder="Confirmar senha"/>
                    </div>
                    <div>
                        <label htmlFor="Unidade"></label>
                        <input type="text" aria-describedby='Unidade' placeholder="unidade/apartamento"/>
                    </div>
                    <div>
                        <label htmlFor="Link"></label>
                        <input type="text" aria-describedby='Link' placeholder="link da foto"/>
                    </div>
                    <Link to='./Feed'>entrar</Link>
                </form>
            </section>
        </MainLogin>
    )

};

export default Cadastro;