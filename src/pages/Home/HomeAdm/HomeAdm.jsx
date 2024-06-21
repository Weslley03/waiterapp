import Navbar from "../../../components/Navbar/Navbar";
import { AdmContainer } from "./HomeAdmStyled";

function HomeAdm(){
    return(
        <>
            <Navbar />
            <AdmContainer>
                <div className="titulo">
                    <h1>Opções:</h1>
                </div>
                
                <div className="opcoes">
                    <a href='http://localhost:5173/Home/Adm/CadastrarProduto'>cadastrar produto</a>
                </div>
            </AdmContainer>
        </>
    )
}

export default HomeAdm;