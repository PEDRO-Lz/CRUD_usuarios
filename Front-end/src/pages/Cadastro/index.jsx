import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        document.title = "Cadastro"
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário cadastrado com sucesso!")
        } catch (err) {
            alert("Erro ao cadastrar usuário.")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 bg-black border border-red-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Cadastro</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Nome"
                        className="w-full px-3 py-2 border border-red-600 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none"
                    />
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
                        Cadastrar-se
                    </button>
                </form>
                <Link
                    to="/login"
                    className="text-red-500 hover:text-red-400 mt-4 block text-center"
                >
                    Já tem uma conta? Faça login
                </Link>
            </div>
        </div>
    )
}

export default Cadastro
