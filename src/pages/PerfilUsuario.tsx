import Navbar from "../componetes/Navbar/Navbar";
import { Main } from "./PerfilUsuario.style";

function PerfilUsuario() {
  return (
    <>
      <Navbar />
      <Main>
        <section className="paginaUsuario">
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h4>Nome Sobrenome</h4>
            <div className="dados">
              <span>apê 82</span>
              <p>user@mail.com</p>
              <p>00 publicações</p>
            </div>
          </div>
          <button>editar perfil</button>
        </section>

        <section className="paginaUsuario">
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h6> Nome - apê 82</h6>
            <div className="informacoes">
              <span className="horario">00/00/2022 00:00</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="paginaUsuario">
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h6> Nome - apê 82</h6>
            <div className="informacoes">
              <span className="horario">00/00/2022 00:00</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="paginaUsuario">
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h6> Nome - apê 82</h6>
            <div className="informacoes">
              <span className="horario">00/00/2022 00:00</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
}

export default PerfilUsuario;
