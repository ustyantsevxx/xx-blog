/* eslint-disable @next/next/no-page-custom-font*/

import { Head, Html, Main, NextScript } from 'next/document'

export default function CustomDocument() {
  return (
    <Html className="h-full w-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="1"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="h-full w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
