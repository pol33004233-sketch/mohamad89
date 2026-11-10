import { useEffect } from 'react'

const rows = [
  ['XS', '82', '62', '88'],
  ['S', '86', '66', '92'],
  ['M', '90', '70', '96'],
  ['L', '96', '76', '102'],
  ['XL', '102', '82', '108'],
]

export default function SizeGuide({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal">
      <button className="modal__scrim" onClick={onClose} aria-label="Close size guide" />
      <div className="modal__panel" role="dialog" aria-modal="true" aria-label="Size guide">
        <header className="modal__head">
          <h2>Size Guide</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close size guide">
            ✕
          </button>
        </header>
        <p className="modal__intro">
          Measurements in centimetres, taken flat. Our pieces are cut with a little ease — if you sit
          between two sizes, choose the smaller for a closer line.
        </p>
        <table className="size-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hip</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (i === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={i}>{cell}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="modal__foot">
          Made to order in small batches — alterations can be requested at atelier@ariyo.com.
        </p>
      </div>
    </div>
  )
}
