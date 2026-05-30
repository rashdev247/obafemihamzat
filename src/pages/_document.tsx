import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-NG">
      <Head>
        <meta name="application-name" content="Obafemi Hamzat 2027" />
        <meta name="apple-mobile-web-app-title" content="Obafemi Hamzat 2027" />
        <meta name="theme-color" content="#063b2e" />
        <meta name="format-detection" content="telephone=no" />
        <link
          rel="preload"
          href="/fonts/sanchez/Sanchez-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/sanchez/Sanchez-Italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/dh-favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/dh-favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/dh-favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/dh-favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/dh-favicon-512x512.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/dh-favicon-512x512.png" />
        <link rel="shortcut icon" type="image/png" href="/dh-favicon-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
