import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Converter from './components/Converter'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Plans />
      <Converter />
      <h1 className='font-primary text-3xl font-bold text-primary'>
        Hello world!
      </h1>
    </div>
  )
}

export default App
