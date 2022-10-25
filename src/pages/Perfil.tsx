import Navbar from "../componetes/Navbar/Navbar";
import { NaoPostou} from "./Perfil.style";
import { Main } from "./Feed.style";

function Perfil() {
  
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
          </Main>
       
       
        
        <NaoPostou className="feedUserTimeline">
        <p>Você ainda não fez nenhuma publicação :(</p>
          <img
            className="parrotOpaco"
            width="200px"
            src="../..//public/img/iconeopaco.png"
          />
        </NaoPostou>
        </>
    )
}
export default Perfil;