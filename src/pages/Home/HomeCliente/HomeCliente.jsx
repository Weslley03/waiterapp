import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Container, MesaLista, Opcoes } from "./HomeClienteStyled";

function HomeCliente(){

    const [ mesa, setMesa ] = useState([]);

    useEffect(() => {
        setMesa(getItensMesa());
    }, []);

    function getItensMesa(){
        const storageMesa = localStorage.getItem('mesa')
        if(storageMesa){
            try{
                return JSON.parse(storageMesa)
            }catch(err){
                console.log("Error parsing JSON from localStorage: ", err);
                return [];
            }
        }
        return [];
    }

    function calcularValorMesa(){
        const mesa = getItensMesa()
        return mesa.reduce((total, item) => total + item.valorProduto, 0)
    }

    return(
        <>
            <Navbar />
                <Container>
                    <MesaLista>
                        <div> 
                            <h2>Lista da Mesa </h2>
                        </div>

                        <div className="mesa">
                        {mesa.length > 0 ? (
                            mesa.map((item, index) => (
                                <p key={index}> {`${item.nomeProduto}... ${item.valorProduto}`} </p>
                            ))
                         ) : (
                            <p>mesa vazia...</p> 
                        )}

                        <h3>valor total: {calcularValorMesa()}</h3>
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