import { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PageRoutes } from "./components/PageRoutes";
import { HelmetProvider } from "react-helmet-async";
import { Donate } from "./components/Donate";
import { proxy } from "valtio";
import { Modal } from "./components/Modal";

export const state = proxy({
  events: [],
  upcomingEvents: [],
  images: [],
  loading: true,
});

function App() {
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    const url = "https://www.api.schf.org.ng/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        state.events = data["past_events"];
        state.images = data["media"];
        state.upcomingEvents = data["upcoming_events"];
        state.loading = false;
      })
      .catch((error) => {
        state.loading = false;
      });
  }, []);

  return (
    <>
    {showModal && <Modal selected={selected} setShowModal={setShowModal}/>}
      <HelmetProvider>
        <Nav />
        <PageRoutes setShowModal={setShowModal} setSelected={setSelected}/>
        <Donate />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
