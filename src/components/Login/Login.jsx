import { FaUser, FaLock } from "react-icons/fa" //Funciona como um componente
import { useState } from "react"
import "./Login.css" //Importando o CSS do componente

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de autenticação aqui
    alert("Enviando dados: " + email + " " + password);
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Acesse o sistema</h1>

            <div className="input-container">
                <input type="email" placeholder='Digite seu email' 
                onChange={(e) => setEmail(e.target.value)} required/>
                <FaUser className="icon" />
            </div>

            <div className="input-container">
                <input type="password"  placeholder='Digite sua senha' 
                onChange={(e) => setPassword(e.target.value)} required/>
                <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>
                Entrar
            </button>

            <div className="signup-link">
                <p>Não possui uma conta? <a href="#">Cadastre-se</a></p>
            </div>

        </form>
    </div>
  )
}

export default Login