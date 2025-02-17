import React, { ReactNode } from 'react'

export default function HomeLayout({children}:{children:ReactNode}) {
  return (
    <div>
        <h1>Roza belay</h1>
        {children}
    </div>
  )
}
