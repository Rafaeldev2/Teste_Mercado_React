import React from 'react';

const ItemLista = ({itemLista, listaMercado, setListaMercado}) => {

    const removeItemLista = () => {
        const novaLista = [...listaMercado]
        const novaListaFiltrada = novaLista.filter(
            (itemAtual) => itemAtual !== itemLista
        );
        setListaMercado(novaListaFiltrada)
    };

    return (
        <li>
            <p>{itemLista}</p>
            <button onClick={() => removeItemLista()}>Remover</button>
        </li>
    )
}
export default ItemLista;