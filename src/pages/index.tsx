import Layout from "../components/Layout"

export default function Home() {
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      gradientBackground col
      text-white
    `}
    >
      <Layout title="teste!!!">
        <span className="text-4xl">Conteúdo</span>
      </Layout>
    </div>
  )
}
