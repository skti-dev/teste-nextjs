import React, { useState } from "react"

function Home() {
  return (
    <div>
      <h1> Página inicial </h1>
      <Contador />
      <hr />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1)

  const adicionarContador = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home
