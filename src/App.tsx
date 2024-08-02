import './global.css'

import atacSistemLogo from './assets/atac-sistem-logo.png'
import { ClientForm } from './components/ClientForm'
import { Header } from './components/Header'
import { ClientList } from './components/ClientList'
import { useEffect, useState } from 'react'
import api from "./services/api";

function App() {
  const [clients, setClients] = useState([])

  const fetchData = async () => {
    const { data } = await api.get(`/clients`)
    setClients(data);
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <Header
        logo={atacSistemLogo}
      />
      <main className="text-gray-700 grid grid-row gap-10 justify-center items-center">
        <ClientForm callback={fetchData}/>
        <ClientList clients={clients} />
      </main>
    </>
  )
}

export default App
