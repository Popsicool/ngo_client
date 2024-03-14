import './App.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { PageRoutes } from './components/PageRoutes'
import { HelmetProvider } from 'react-helmet-async';
import { Donate } from './components/Donate';

function App() {

  return (
    <>
    <HelmetProvider>
      <Nav/>
      <PageRoutes/>
      <Donate/>
      <Footer/>
    </HelmetProvider>
    </>
  )
}

export default App
