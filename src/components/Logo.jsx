export default function Logo({ className = 'w-full' }) {
  return (
    <img src="/logo.svg" alt="Corner Corner" className={className} style={{ filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.4))' }} />
  )
}
