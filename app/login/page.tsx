'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [user,setUser] = useState('')
  const router = useRouter()
  function submit(e:any){
    e.preventDefault()
    if(!user.trim()) return alert('Informe o usuário')
    localStorage.setItem('os_user', user)
    router.push('/')
  }
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white border rounded">
      <h2 className="text-xl mb-4">Entrar</h2>
      <form onSubmit={submit}>
        <input value={user} onChange={e=>setUser(e.target.value)} className="w-full p-2 border rounded mb-3" placeholder="Usuário"/>
        <button className="px-4 py-2 bg-slate-900 text-white rounded">Entrar</button>
      </form>
    </div>
  )
}
