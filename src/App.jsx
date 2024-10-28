import { useState } from 'react'
import palacio from './assets/img/palacio.png'
import lampada from './assets/img/lampada.png'
import genio from './assets/img/genio.png'
import './App.scss'

const App = () => {

  const [showGenio, setShowGenio] = useState(false)
  
  const click = () =>{
    setShowGenio(true)
  }

  return (
    <>
    <main className='app'>
      <img src={palacio} alt="Palácio" className='palacio'/>
      <div className='sobreposicao'>
      <p>"Liberte a magia da programação com a lâmpada de Aladim"</p>
      <div className='acao'>
      {showGenio ? ( <img src={genio} alt="Gênio" />
      ):( <img src={lampada} alt="Lâmpada do gênio" className='imagem-lampada'/>
      )}
      <button onClick={click}>Clique aqui</button>
      </div>
      </div>
    </main>
    </>
  )
}

export default App
