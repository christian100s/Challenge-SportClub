import React from 'react'

function formatDate(iso) {
  try {
    const d = new Date(iso)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  } catch {
    return iso
  }
}

export default function BenefitCard({ item }) {
  return (
    <article className="card">
      <img
        className="thumb"
        src={item.imagen}
        alt={item.name_beneficio}
      onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/fallback/400/240' }}
      />
      <div className="card-body">
        <h3 className="title">{item.name_beneficio}</h3>
        <div className="meta">
          <span className="badge">{item.categoria_beneficio}</span>
          <span>Creado: {formatDate(item.date_created)}</span>
        </div>
      </div>
    </article>
  )
}
