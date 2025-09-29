import Head from 'next/head'
import { motion } from 'framer-motion'

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold">Pousada Tropicanas</h1>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#quartos" className="hover:underline">Quartos</a>
          <a href="#reserva" className="hover:underline">Reserva</a>
          <a href="#contato" className="hover:underline">Contato</a>
          <a href="#reserva" className="px-4 py-2 rounded-2xl bg-black text-white">Reservar</a>
        </nav>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer text-2xl" aria-label="Abrir menu">☰</summary>
          <div className="absolute right-2 mt-2 bg-white border rounded-xl shadow p-4 grid gap-2">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#quartos" className="hover:underline">Quartos</a>
            <a href="#reserva" className="hover:underline">Reserva</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </div>
        </details>
      </div>
    </header>
  )
}

function Card({children}) {
  return <div className="border rounded-2xl bg-white shadow-sm">{children}</div>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Pousada Tropicanas - Wireframe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 space-y-10">
          <motion.section
            id="home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 md:grid-cols-2 items-center"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">Bem-vindo à nossa pousada</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Hospede-se com conforto, praticidade e próximo às melhores atrações da região.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#quartos" className="px-4 py-2 rounded-2xl bg-black text-white">Ver Quartos</a>
                <a href="#reserva" className="px-4 py-2 rounded-2xl border">Disponibilidade</a>
              </div>
            </div>
            <Card>
              <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-2xl">
                <span className="text-gray-500">Imagem da pousada (banner)</span>
              </div>
            </Card>
          </motion.section>

          <section id="quartos">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Quartos Disponíveis</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3].map(i => (
                <Card key={i}>
                  <div className="aspect-video bg-gray-100 grid place-items-center text-gray-500 rounded-t-2xl">
                    Foto do quarto {i}
                  </div>
                  <div className="p-4 grid gap-3">
                    <div className="font-medium">Quarto {i} • até 3 hóspedes</div>
                    <div className="text-sm text-gray-600">Ar-condicionado • Wi‑Fi • Café da manhã</div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="block text-gray-500">a partir de</span>
                        <span className="font-semibold">R$ 280 / noite</span>
                      </div>
                      <a href="#reserva" className="px-3 py-2 text-sm rounded-2xl border">Reservar</a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="reserva" className="space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold">Faça sua Reserva</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium">Check-in</label>
                <div className="border rounded-xl p-6 bg-white text-gray-500">[Calendário]</div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Check-out</label>
                <div className="border rounded-xl p-6 bg-white text-gray-500">[Calendário]</div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input placeholder="Nome completo" className="h-11 rounded-2xl px-4 border bg-white" />
              <input placeholder="E-mail" className="h-11 rounded-2xl px-4 border bg-white" />
              <input placeholder="Telefone (WhatsApp)" className="h-11 rounded-2xl px-4 border bg-white md:col-span-2" />
            </div>

            <div className="flex gap-3">
              <a className="px-4 py-2 rounded-2xl bg-black text-white" href="#reserva">Confirmar Reserva</a>
              <a className="px-4 py-2 rounded-2xl border" href="#">Ver políticas</a>
            </div>
          </section>

          <section id="contato" className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold">Contato</h2>
            <p className="text-gray-600">WhatsApp: (48) 99999-9999</p>
            <p className="text-gray-600">Endereço: Rua Exemplo, 123 - Cidade/UF</p>
            <div className="grid sm:inline-flex gap-3 mt-2">
              <a className="px-4 py-2 rounded-2xl bg-black text-white" href="https://wa.me/5548999999999">Falar no WhatsApp</a>
              <a className="px-4 py-2 rounded-2xl border" href="#reserva">Reservar agora</a>
            </div>
          </section>
        </main>

        <div className="md:hidden sticky bottom-0 z-40 bg-white/90 border-t px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="text-sm">
              <div className="text-gray-500">Disponível para suas datas?</div>
              <div className="font-medium">Consulte e reserve agora</div>
            </div>
            <a href="#reserva" className="px-4 py-2 rounded-2xl bg-black text-white">Reservar</a>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 border-t py-6">
          © 2025 Pousada Tropicanas. Todos os direitos reservados.
        </footer>
      </div>
    </>
  )
}
