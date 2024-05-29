import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './ModalProduto.css';
import FormularioProdutos from '../formprodutos/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className=' border rounded px-4 py-2  hover:bg-white hover:text-indigo-900'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormularioProdutos />
            </Popup>
        </>
    );
}

export default ModalProduto;