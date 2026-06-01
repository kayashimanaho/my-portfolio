import Header from "./components/Header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold">こんにちは！</h1>
      </div>
    </main>
  )
}