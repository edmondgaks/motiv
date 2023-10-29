import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Motiv',
  description: 'A web application for Cars',
}

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
