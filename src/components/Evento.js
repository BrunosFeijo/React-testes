import Button from "./eventos/Button"

function Evento({ numero }) {
    function meuEvento() {
        console.log(`Evento ativado! ${numero}`)
    }

    function segundoEvento() {
        console.log('Ativando segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento