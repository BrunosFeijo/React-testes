import { useState } from "react"

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault() /* para esperar o evento antes de tranferir para o backend */
        console.log(`Cadastrou o usuário: ${name}`)
    }   

    const [name, setName] = useState('Bruno') /* useState('default') */

    return (
        <div>
            <h1>Meu Cadastro!</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form