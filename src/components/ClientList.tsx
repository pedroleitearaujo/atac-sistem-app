import { useState } from "react";

import { Client, ClientTable } from "./ClientTable";
import { Modal } from './Modal';

export function ClientList({ clients }: { clients: Client[] }){
    const [showModal, setShowModal] = useState(false)
    const [searchInput, setSeachInput] = useState('')

    return (
        <div className="gap-4 w-full max-w-screen-lg border-2 rounded-lg border-zinc-400 border-rad p-3">
            <div className="text-gray-800 pb-3">
                <div className="grid grid-cols-3 px-3"> 
                    <p className="text-2xl">Lista de Clientes</p>

                    <input 
                        type="text"
                        placeholder="Pesquisar..."
                        className="border border-zinc-400 shadow-sm rounded h-8 px-3 "
                        onChange={(e) => setSeachInput(e.target.value)}
                    />
                    
                    <button
                        type="submit"
                        className="bg-blue-500 rounded font-semibold text-base text-white h-10 w-56 hover:bg-blue-600 place-self-end"
                        onClick={() => setShowModal(true)}
                    >
                        Visualizar Ordem de Entrega
                    </button>
                </div>
            </div>
            {!clients ? (
                <div className="text-gray-800 text-2xl pb-2 flex"> 
                    Carregando...
                </div>
            ): (
                <div>
                    <ClientTable clients={(!searchInput) ? clients : clients.filter((client => {
                        const regex = new RegExp(searchInput, 'i')

                        return regex.test(client.name) || 
                            regex.test(client.email) || 
                            regex.test(client.phone.toString()) ||
                            regex.test(client.coordinates_x.toString()) ||
                            regex.test(client.coordinates_y.toString())
                    }))}/>
                </div>
            )}
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}