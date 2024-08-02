export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    coordinates_x: number;
    coordinates_y: number;
}


export function ClientTable({clients}:{clients: Client[]}){
    
    return (
        <div>
            <table className="w-full max-w-screen-lg">
                <thead className="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Nome</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">E-mail</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Telefone</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center">Coordenada X</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-center">Coordenada Y</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {clients.map((client) =>{
                        return (
                            <tr key={client.id}>
                                <td className="p-3 text-sm text-gray-700"> { client.name } </td>
                                <td className="p-3 text-sm text-gray-700"> { client.email } </td>
                                <td className="p-3 text-sm text-gray-700"> { client.phone } </td>
                                <td className="p-3 text-sm text-gray-700 text-center"> { client.coordinates_x } </td>
                                <td className="p-3 text-sm text-gray-700 text-center"> { client.coordinates_y } </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}