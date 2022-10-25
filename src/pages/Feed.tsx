import { Header, Main } from './Feed.style';
import Navbar from "../componetes/Navbar/Navbar";
import PostsAll from '../componetes/PostsAll/PostsAll';


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
        <PostsAll/>
      </Main>
    </>
  )
}

export default Feed
