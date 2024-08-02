import { useEffect, useState } from "react";
import { Client, ClientTable } from "./ClientTable"
import api from "../services/api";

interface ResultCaixeiroViajante {
    shortestDistance: number,
    shortestRoute: Client[]

}

export function Modal({isVisible, onClose}: {isVisible: Boolean, onClose: Function}){
    if (!isVisible) return null

    const [resultCaixeiroViajante, setResultCaixeiroViajante] = useState<ResultCaixeiroViajante>()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(`/caixeiro-viajante`)
            setResultCaixeiroViajante(data);
        }
        
        fetchData().catch(console.error);
    }, [])



    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-full max-w-screen-lg flex flex-col">
                <button className="text-white text-xl place-self-end" onClick={() => onClose()}>
                    X
                </button>
                
                <div className="bg-white rounded p-6">
                    {!resultCaixeiroViajante ? (
                        <div className="text-gray-800 text-2xl pb-2 flex"> 
                            Carregando...
                        </div>
                    ): (
                        <div>
                            <div className="text-gray-800 text-2xl pb-3 flex"> 
                                Ordem de Entrega
                            </div>
                            <ClientTable clients={resultCaixeiroViajante.shortestRoute}/>
                            <div className="flex justify-end pt-8">
                                <button className="bg-zinc-200 rounded font-semibold text-zinc-800 h-10 w-36 hover:bg-zinc-500 place-self-end" onClick={() => onClose()}>
                                    Fechar Janela
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}