import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1984} />
                <Item marca="Audi" ano_lancamento={1969} />
                <Item marca="Porshe" ano_lancamento={2019} />
            </ul>
        </>
    )
}

export default List