import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyles';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// import Head from 'next/head';
// import '../styles/globals.css';
// import { AppProps } from 'next/app';

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
//         />
//         <meta name="description" content="Description" />
//         <meta name="keywords" content="Keywords" />
//         <title>Next.js PWA Example</title>

//         <link rel="manifest" href="/manifest.json" />
//         <link
//           href="/icons/favicon-16x16.png"
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//         />
//         <link
//           href="/icons/icon-32x32.png"
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//         />
//         <link rel="apple-touch-icon" href="/apple-icon.png"></link>
//         <meta name="theme-color" content="#317EFB" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }
