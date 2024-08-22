import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components//navbar/Navbar'
import Footer from '@/components/footer/Footer'
import WalletConnect from '@/components/wallet/WalletConnect'
//wallet
import './globals.css'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/components/wallet/config'
import Web3ModalProvider from '@/components/wallet/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <div className='container'>
            <div className='header'>
              <Navbar />
              <div className='nav-wallet'>
                <WalletConnect />
              </div>
            </div>
            <main>{children}</main>
            <Footer />
          </div>
        </Web3ModalProvider>
      </body>
    </html>
  )
}
