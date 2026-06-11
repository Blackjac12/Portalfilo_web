import { useCursor } from '../hooks/useCursor'

const s = {
  cursor: {
    position: 'fixed', width: 8, height: 8,
    background: 'var(--accent)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%, -50%)', transition: 'transform 0.15s',
  },
  ring: {
    position: 'fixed', width: 28, height: 28,
    border: '1px solid rgba(0,229,160,0.5)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%, -50%)',
  },
}

export default function Cursor() {
  const { curRef, ringRef } = useCursor()
  return (
    <>
      <div ref={curRef} style={s.cursor} />
      <div ref={ringRef} style={s.ring} />
    </>
  )
}
