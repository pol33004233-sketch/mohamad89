import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { bySlug } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'ariyo-bag'

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const key = `${action.slug}-${action.size}`
      const existing = items.find((i) => i.key === key)
      if (existing) {
        return items.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...items, { key, slug: action.slug, size: action.size, qty: 1 }]
    }
    case 'qty':
      return items
        .map((i) => (i.key === action.key ? { ...i, qty: Math.max(0, action.qty) } : i))
        .filter((i) => i.qty > 0)
    case 'remove':
      return items.filter((i) => i.key !== action.key)
    default:
      return items
  }
}

const readStored = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((i) => bySlug(i.slug)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], readStored)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const value = useMemo(() => {
    const lines = items.map((i) => ({ ...i, product: bySlug(i.slug) }))
    return {
      items: lines,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (slug, size) => {
        dispatch({ type: 'add', slug, size })
        setIsOpen(true)
      },
      setQty: (key, qty) => dispatch({ type: 'qty', key, qty }),
      remove: (key) => dispatch({ type: 'remove', key }),
      count: lines.reduce((n, i) => n + i.qty, 0),
      subtotal: lines.reduce((n, i) => n + i.product.price * i.qty, 0),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
