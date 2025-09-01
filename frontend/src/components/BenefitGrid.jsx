import React from 'react'
import BenefitCard from './BenefitCard.jsx'

export default function BenefitGrid({ items }) {
  if (!items?.length) {
    return <div className="loading">No hay beneficios para mostrar.</div>
  }
  return (
    <section className="grid">
      {items.map(item => (
        <BenefitCard key={item.id} item={item} />
      ))}
    </section>
  )
}
