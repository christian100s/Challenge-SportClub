import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BenefitGrid from './components/BenefitGrid.jsx'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function App() {
  const [benefits, setBenefits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/beneficios`)
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        const data = await res.json()
        setBenefits(data)
      } catch (e) {
        setError('No se pudieron cargar los beneficios. ' + e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header title="Beneficios SportClub" />
      <main className="container">
        {loading && <div className="loading">Cargando beneficios…</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !error && <BenefitGrid items={benefits} />}
      </main>
      <Footer />
    </>
  )
}
