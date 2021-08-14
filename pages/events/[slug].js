import { useRouter } from 'next/dist/client/router'

export default function EventPage() {
  const router = useRouter()

  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Click</button>
    </div>
  )
}
