import { useEffect } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { PageRoutes } from './components/PageRoutes'
import { HelmetProvider } from 'react-helmet-async';
import { Donate } from './components/Donate';
import { proxy } from 'valtio';
import events from './components/variants/pevents';
import upcomingevents from './components/variants/upevents'

export const state = proxy({
  events: [],
  upcomingEvents: [],
});


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    state.events = events
    state.upcomingEvents = upcomingevents
  }, [])

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
