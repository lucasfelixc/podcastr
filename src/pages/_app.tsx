import Head from 'next/head'

import { Header } from 'components/Header'

import GlobalStyle from '@styles/Global'
import theme from '@styles/Theme'
import { Wrapper } from '@styles/App'

import { ThemeProvider } from 'styled-components'
import { Player } from 'components/Player'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>
      <ThemeProvider theme={theme}>

        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
          </main>
          <Player />
        </Wrapper>

      </ThemeProvider>
    </>
  )
}

export default MyApp
