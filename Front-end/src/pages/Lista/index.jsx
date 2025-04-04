import { useEffect, useState } from "react"
import api from "../../services/api"

function ListarUsuarios() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        document.title = "Lista de Usuários"

        async function loadUsers() {
            const token = localStorage.getItem('token')

            try {
                const {
                    data: { user },
                } = await api.get('/listar-usuarios', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                setAllUsers(user)
            } catch (err) {
                console.error("Erro ao carregar usuários:", err)
            }
        }

        loadUsers()
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-full max-w-2xl p-8 bg-black border border-red-600 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Lista de Usuários</h2>
                <ul className="space-y-4">
                    {allUsers && allUsers.length > 0 ? (
                        allUsers.map((user) => (
                            <li key={user.id} className="bg-black border border-red-600 p-4 rounded-md text-white">
                                <p><span className="font-bold text-red-500">ID:</span> {user.id}</p>
                                <p><span className="font-bold text-red-500">Nome:</span> {user.name}</p>
                                <p><span className="font-bold text-red-500">Email:</span> {user.email}</p>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-400">Nenhum usuário encontrado.</p>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ListarUsuarios
