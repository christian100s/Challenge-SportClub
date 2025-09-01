import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      ©Copyright {year} Beneficios SportClub — Todos los derechos reservados.
    </footer>
  )
}
