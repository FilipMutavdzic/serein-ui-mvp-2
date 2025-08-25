import './globals.css'
import { Header } from '../components/Header'
import { TabBar } from '../components/TabBar'
import { ServiceWorkerRegister } from '../components/ServiceWorkerRegister'

export const metadata = {
  title: 'Serein — Pocket Calm',
  description: 'Light, fast stress-relief tools for quick resets.',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-[100dvh] bg-bg text-text flex flex-col">
        <Header />
        <main className="flex-1 container py-4">{children}</main>
        <TabBar />
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}

