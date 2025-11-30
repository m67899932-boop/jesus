export default function Home(){
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold mb-4">OS Systema</h1>
      <p className="text-slate-600 mb-6">Clean minimal starter. Use the navigation to open modules.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a href="/os" className="p-4 border rounded shadow-sm hover:shadow-md">Ordens de Serviço</a>
        <a href="/frota" className="p-4 border rounded shadow-sm hover:shadow-md">Frotas</a>
        <a href="/employees" className="p-4 border rounded shadow-sm hover:shadow-md">Funcionários</a>
      </div>
    </section>
  )
}
