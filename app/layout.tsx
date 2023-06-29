import './globals.css'

import Navbar from './components/Navbar'
import React from "react";

export const metadata = {
  title: 'QuillPen – Where good ideas find you.',
  description: 'QuillPen is an open platform where readers find dynamic thinking, and where expert and undiscovered ' +
    'voices can share their writing on any topic.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-NunitoSans tracking-tight">
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
