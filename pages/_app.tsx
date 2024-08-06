import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import PlanetsRoadmapLaptopContextProvider from "../components/context/planetsRoadmap";
import Head from "next/head";
// import WalletContextProvider from "../components/context/getWhitelisted";
import Script from "next/script";
// import TitleContextProvider from "../components/context/titleContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K9957PS');`,
        }}
      ></Script>
      <Head>
        <title>Moon Earth</title>
        <meta property="title" content="Moon Earth" key="title" />
        <meta
          name="description"
          content="A strategy, massively multiplayer online game involving space exploration, territorial conquest, and dominance."
        />
        <meta
          name="keywords"
          content="Multiplayer online game, Moon Earth Revolution, NFT, space exploration, land NFT, LAND Development"
        />
        <meta property="og:image" content="/metaImage.webp" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="icon" type="image/svg" sizes="16x16" href="/favicon.svg" />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9957PS"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
      </body>
      {/* <TitleContextProvider> */}
      {/* <WalletContextProvider> */}
      <PlanetsRoadmapLaptopContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlanetsRoadmapLaptopContextProvider>
      {/* </WalletContextProvider> */}
      {/* </TitleContextProvider> */}
    </>
  );
}
export default MyApp;
