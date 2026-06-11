import { useEffect, useRef } from 'react'

export function useCursor() {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ rx: 0, ry: 0, mx: 0, my: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const cur = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cur.style.left = e.clientX + 'px'
      cur.style.top = e.clientY + 'px'
    }

    const animate = () => {
      const { rx, ry, mx, my } = pos.current
      const nrx = rx + (mx - rx) * 0.12
      const nry = ry + (my - ry) * 0.12
      pos.current.rx = nrx
      pos.current.ry = nry
      ring.style.left = nrx + 'px'
      ring.style.top = nry + 'px'
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { curRef, ringRef }
}
