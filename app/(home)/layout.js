import '../styles/globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'

const dmsans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leaguepedia',
  description: 'Your wiki guide to the League of Legends',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <div className="container-global">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}