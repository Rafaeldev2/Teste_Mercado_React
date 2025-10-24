import ItemLista from "./ItemLista.jsx";
import {useRef, useState} from "react";

function App() {
    const [listaMercado, setListaMercado] = useState([]);
    const inputAdicionar = useRef();
    console.log(inputAdicionar.current);

    const addElementoLista = () => {
        const novaLista = [...listaMercado];
        const valorInput = inputAdicionar.current.value

        if (valorInput){

        novaLista.push(valorInput);
        setListaMercado(novaLista);
        }

        inputAdicionar.current.value = "";



    };

  return (
        <>
            <h1 className= "text-3xl font-bold">Lista de Mercado</h1>
            <input ref={inputAdicionar} type="text" placeholder= "Digite um item: "/>
            <button onClick={() => addElementoLista()}>Adicionar</button>

            {listaMercado.length > 0 ? (
                <ul>
                    {listaMercado.map((itemLista, index) => (
                    <ItemLista
                        key={index}
                        itemLista={itemLista}
                        listaMercado={listaMercado}
                        setListaMercado={setListaMercado}
                    />
                    ))}
                </ul>
            ) : (
            <p>Você não tem nenhum item na sua Lista</p>
            )}
        </>
    );
}

export default App
