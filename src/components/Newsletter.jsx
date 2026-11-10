import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Newsletter({ variant = 'section' }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <div className={`newsletter newsletter--${variant}`}>
      <form className="newsletter__form" onSubmit={submit}>
        <label className="visually-hidden" htmlFor={`email-${variant}`}>
          Email address
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={done}
        />
        <button type="submit" className="btn btn--gold">
          {done ? 'You’re on the list' : 'Subscribe'}
        </button>
      </form>
      <p className="newsletter__note">
        {done
          ? 'Thank you — a first letter from the atelier is on its way.'
          : 'No noise. Four letters a year, written by the atelier.'}
      </p>
      {variant === 'footer' ? null : (
        <p className="newsletter__privacy">
          By subscribing you agree to our <Link to="/#contact">privacy policy</Link>.
        </p>
      )}
    </div>
  )
}
