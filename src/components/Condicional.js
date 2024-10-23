import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail() {
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }


    return (
        <div>
            <h2>Cadastre seu e-mail: </h2>
            <input 
                type="email"
                placeholder="Insira seu e-mail..."
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button onClick={enviarEmail}>Enviar</button>
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )} {/* condicional */}
        </div>
    )
}

export default Condicional