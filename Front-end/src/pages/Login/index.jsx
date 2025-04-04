import { useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../services/api"

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login"
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            localStorage.setItem('token', token)
            navigate('/listar-usuarios')
        } catch (err) {
            alert("Email ou senha inválidos.")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 bg-black border border-red-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-red-600 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Senha"
                        className="w-full px-3 py-2 border border-red-600 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <Link to="/" className="text-red-500 hover:text-red-400 mt-4 block text-center">
                    Não tem uma conta? Cadastre-se
                </Link>
            </div>
        </div>
    )
}

export default Login
