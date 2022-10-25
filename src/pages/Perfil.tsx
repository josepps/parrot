import Navbar from "../componetes/Navbar/Navbar";
import { NaoPostou } from "./Perfil.style";

function Perfil() {
  
    return (
        <>
        <Navbar/>
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