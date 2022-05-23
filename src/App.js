import Layout from './components/Layout'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Converter from './components/Converter'

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <Plans />
        <Converter />
      </Layout>
    </div>
  )
}

export default App
