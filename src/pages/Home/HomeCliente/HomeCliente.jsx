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

                        <p>- Skol 600ml........R$ 10.00</p>

                        <div>
                            <h3>Total: R$ 10.00</h3>
                        </div>
                    </MesaLista>

                    <Opcoes>
                        <div> 
                            <h2>Opções</h2>
                        </div>

                        <a href="http://localhost:5173/Home/Cliente/Pedido">
                         <p>fazer um pedido</p>
                        </a>
                    </Opcoes>
                </Container>
        </>
    )
}

export default HomeCliente;