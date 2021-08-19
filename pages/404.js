// Next Dependencies
import Link from 'next/link'

// React Dependencies
import { FaExclamationTriangle } from 'react-icons/fa'

// Components
import Layout from '@/components/Layout'

// Styles
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
  return (
    <div>
      <Layout title="Page Not Found">
        <div className={styles.error}>
          <h1>
            <FaExclamationTriangle /> 404
          </h1>
          <h4>Sorry, there is nothing here</h4>
          <Link href="/">Go Back Home</Link>
        </div>
      </Layout>
    </div>
  )
}
