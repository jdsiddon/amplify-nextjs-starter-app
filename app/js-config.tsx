"use client"

import Script from '@/node_modules/next/script'

export default function JsConfig() {
  return (
    <>
      <Script 
          strategy="lazyOnload"
          onLoad={() => {
            console.log("foobar")
            window.AppcuesSettings = { enableURLDetection: true }
          }
        }/>
    </>  
  )
}