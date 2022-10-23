import { MainLogin } from './Login.style';
import { Link } from "react-router-dom";

function Login() {

    return (
        <MainLogin>
            <section>
                <img src="..\img\logoVerticalColorido.png" alt="" />
                <h3>Login</h3>
                <form >
                    <div>
                        <label htmlFor="Email"></label>
                        <input type="email" aria-describedby='Email' placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="Senha"></label>
                        <input type="password" aria-describedby='Senha' placeholder="senha"/>
                    </div>
                    <Link to='./Feed'>entrar</Link>
                </form>
                <a href="#">cadastre-se</a>
            </section>
        </MainLogin>
    )
}

export default Login