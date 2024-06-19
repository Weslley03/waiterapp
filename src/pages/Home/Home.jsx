import HomeAdm from "./HomeAdm/HomeAdm";
import HomeCliente from "./HomeCliente/HomeCliente";
import HomeGarcom from "./HomeGarcom/HomeGarcom";
import { useParams } from 'react-router-dom';

function Home(){

    const { categoria } = useParams();

    function renderComponentByCategory(){
        switch (categoria) {
            case 'Cliente':
                return  <HomeCliente />;

            case 'Garcom':
                return <HomeGarcom />;

            case 'Adm':
                return <HomeAdm />;
                
            default :
                return <div>Nenhuma categoria especificada.</div>;
        }
    }

    return(
        <div>
            <h1>tela inicial</h1>

            {renderComponentByCategory()}
        </div>
    )
}

export default Home;