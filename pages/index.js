import Link from 'next/link'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href="/about">Go to about</Link>
    </Layout>
  )
}
