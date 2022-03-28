import '../assets/css/app.css'

import Head from 'next/head'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const CustomApp = ({ Component, pageProps }: any) => {
  const [client] = useState(new QueryClient())

  return (
    <>
      <Head>
        <title>Блог Тимофея Устьянцева</title>
      </Head>

      <QueryClientProvider client={client}>
        <ReactQueryDevtools position="top-left" />

        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default CustomApp
