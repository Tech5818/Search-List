import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraUiProvider } from './ChakraUiProvider'
import { Center } from '@chakra-ui/react'
import { GlobalContext } from './GlobalContext'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContext>
          <ChakraUiProvider>
            <Center
              h="100vh"
              background="#efefef"
            >
              {children}
            </Center>
          </ChakraUiProvider>
        </GlobalContext>
      </body>
    </html>
  )
}
