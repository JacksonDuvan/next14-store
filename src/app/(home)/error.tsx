"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: ErrorProps){

  useEffect(() => {
    console.log('error >>',error);
  }, [error])

  return (  
    <div style={{
      padding: '10rem',
    }}>
      <h1>:c</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}