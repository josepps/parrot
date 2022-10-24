import { Header} from "../../pages/Feed.style"

function Navbar(){
    return(
        <>
        <Header>
        <a href="#"><img className='logoHeader' src="../img/logoLorizontalColorido.png" alt="Logo da parrot" /></a>
        <nav className='navHeader'>
          <a href="#">Olá, usuário |</a>
          <a href="#">sair</a>
        </nav>
         </Header>
        </>
    )
}

export default Navbar;