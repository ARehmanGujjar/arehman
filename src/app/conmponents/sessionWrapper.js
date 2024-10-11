'use client'
import { SessionProvider } from "next-auth/react"

const sessionWrapper = ({children}) => {
  return (
    <SessionProvider session={session}>
        {children}
     </SessionProvider>


  )
}

export default sessionWrapper