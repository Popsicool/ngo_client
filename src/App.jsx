import './App.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { PageRoutes } from './components/PageRoutes'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
    <HelmetProvider>
      <Nav/>
      <PageRoutes/>
      <Footer/>
    </HelmetProvider>
    </>
  )
}

export default App
