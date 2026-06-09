import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Food from './pages/Food'
import Events from './pages/Events'
import VenueHire from './pages/VenueHire'
import Farm from './pages/Farm'
import About from './pages/About'
import Book from './pages/Book'
import WorldCup from './pages/WorldCup'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/events" element={<Events />} />
        <Route path="/venue-hire" element={<VenueHire />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/world-cup" element={<WorldCup />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
