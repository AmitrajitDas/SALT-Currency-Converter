import Layout from './components/Layout'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Converter from './components/Converter'
import Testimonial from './components/Testimonial'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <Plans />
        <Converter />
        <Testimonial />
        <Newsletter />
      </Layout>
    </div>
  )
}

export default App
