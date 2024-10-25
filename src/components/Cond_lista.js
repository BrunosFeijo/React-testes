function Cond_lista({ itens }) {
    return (
        <>
            <h3>Lista: </h3>
            {itens.length > 0 ? (
                itens.map((item, index) => <ul><li key={index}>{item}</li></ul>)
            ) : (
                <p>Não há itens na lista!</p>
            )} {/* condicional ternária: condição ? se sim : se não */}
        </>
    )
}

export default Cond_lista