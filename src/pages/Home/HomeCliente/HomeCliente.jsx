import Navbar from "../../../components/Navbar/Navbar";
import { Container, MesaLista, Opcoes } from "./HomeClienteStyled";

function HomeCliente(){
    return(
        <>
            <Navbar />
                <Container>
                    <MesaLista>
                        <div> 
                            <h2>Lista da Mesa </h2>
                        </div>

                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                    </MesaLista>

                    <Opcoes>
                        <div> 
                            <h2>Opções</h2>
                        </div>

                        <p>opção</p>
                        <p>opção</p>
                        <p>opção</p>
                    </Opcoes>
                </Container>
        </>
    )
}

export default HomeCliente;