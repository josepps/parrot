import { Header, Main } from './Feed.style';
import Navbar from "../componetes/Navbar/Navbar";


function Feed() {

  return (
    <>
      <Navbar/>
      <Main>
        <section className='formPublicação'>
          <img src="../img/iconeHomem.png" alt="Imagem de homem" />
          <form>
            <div>
              <label htmlFor="Postagem"></label>
              <input type="text" aria-describedby='Postagem' />
            </div>
            <button typeof='submit'>Pulblicar</button>
          </form>
        </section>
        <section className='pulblicaçõesFeed'>
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h4>Vinicius - apê 42</h4>
            <span>10/06/2022 09:00</span>
            <p>Poxa galera, vamos respeitar o horário de silêncio!
              Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
          </div>
        </section>
        <section className='pulblicaçõesFeed'>
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h4>Vinicius - apê 42</h4>
            <span>10/06/2022 09:00</span>
            <p>Poxa galera, vamos respeitar o horário de silêncio!
              Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
          </div>
        </section>
        <section className='pulblicaçõesFeed'>
          <img src="../img/iconeHomem.png" alt="" />
          <div>
            <h4>Vinicius - apê 42</h4>
            <span>10/06/2022 09:00</span>
            <p>Poxa galera, vamos respeitar o horário de silêncio!
              Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
          </div>
        </section>
      </Main>
    </>
  )
}

export default Feed
