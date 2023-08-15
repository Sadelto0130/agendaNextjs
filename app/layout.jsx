import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Primera App en Next',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css" />
      </head>
      <body>
        <Navigation/>
        <div className="container p-4">
          {children}
        </div>
      </body>
    </html>
  )
}