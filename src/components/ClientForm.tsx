import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '../services/api';
import { useState } from 'react';
import { ClientList } from './ClientList';

const createClientFormSchema = z.object({
    name: z.string()
        .min(1, 'O nome é obrigatorio'),
    email: z.string()
        .min(1, 'O e-mail é obrigatorio')
        .email('Formato de e-mail invalido'),
    phone: z.string()
        .min(10, 'Formato de telefone valido'),
    coordinates_x: z.string()
        .min(1, 'Preencha as Coordenadas'),
    coordinates_y: z.string()
        .min(1, 'Preencha as Coordenadas'),
})


type createClientFormData = z.infer<typeof createClientFormSchema>

export function ClientForm({ callback }: { callback: Function }) {
    const [savingClient, setSavingClient] = useState<Boolean>(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<createClientFormData>({
        resolver: zodResolver(createClientFormSchema)
    })

    const addUser = async (data: any) => {
        setSavingClient(true)
        try {
            await api.post(`/client`, {...data});
            reset({
                name: '',
                email: '',
                phone: '',
                coordinates_x: '',
                coordinates_y: '',
            })
            setSavingClient(false)
            callback()
          
        } catch(error: any){
            setSavingClient(false)
            console.log(error)
        }
    }

    return (
        <div 
            className="gap-4 w-full max-w-screen-lg border-2 rounded-lg border-zinc-400 border-rad p-3"
        >
            <div className="text-gray-800 text-2xl pb-2 pl-3"> 
                Cadastro de Cliente
            </div>
            <div className="grid grid-cols-3">
                <div className="grid grid-rows-3 px-3 items-center">
                    <label htmlFor="">Nome</label>
                    <input 
                        type="text"
                        placeholder="Jose"
                        className="border border-zinc-400 shadow-sm rounded h-10 px-3"
                        {...register('name')}
                    />
                    {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                </div>

                <div className="grid grid-rows-3 px-3 items-center">
                    <label htmlFor="">E-mail</label>
                    <input 
                        type="email" 
                        placeholder="atacdeli@atacsystem.com"
                        className="border border-zinc-400 shadow-sm rounded h-10 px-3"
                        {...register('email')}
                    />
                    {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                </div>

                <div className="grid grid-rows-3 px-3 items-center">
                    <label htmlFor="">Telefone</label>
                    <input 
                        type="text"
                        placeholder="(11) 9 9999-9999"
                        className="border border-zinc-400 shadow-sm rounded h-10 px-3"
                        {...register('phone')}
                    />
                    {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
                </div>
            
                <div className="grid grid-rows-2 px-3 items-center">
                    <label htmlFor="">Coordenadas</label>
                    <div className="grid grid-cols-2 gap-3">
                        <input 
                            type="number"
                            placeholder="X"
                            className="border border-zinc-400 shadow-sm rounded h-10 px-3"
                            {...register('coordinates_x')}
                        />
                        <input 
                            type="number"
                            placeholder="Y"
                            className="border border-zinc-400 shadow-sm rounded h-10 px-3"
                            {...register('coordinates_y')}
                        />
                    </div>
                    {(errors.coordinates_x && <span className="text-red-600">{errors.coordinates_x.message}</span>) || (errors.coordinates_y && <span className="text-red-600">{errors.coordinates_y.message}</span>)}
                </div>
            </div>
            <div className="grid grid-rows-1 px-3 items-center">
                <button
                    className={`rounded font-semibold text-white h-10 w-36 place-self-end ${!savingClient ? 'bg-emerald-500 hover:bg-emerald-600': 'bg-gray-500 hover:bg-gray-600'} `}
                    onClick={() => handleSubmit(addUser)()}
                >
                    {(!savingClient) ? 'Salvar' : 'Salvando'}
                </button>
            </div>
        </div>
    )
}