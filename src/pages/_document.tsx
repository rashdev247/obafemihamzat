import { Html, Head, Main, NextScript } from "next/document";

const suppressKnownExtensionDevErrors =
  process.env.NODE_ENV === "development"
    ? `
      (function () {
        function isMetaMaskConnectionError(value) {
          var text = "";
          if (typeof value === "string") {
            text = value;
          } else if (value && typeof value === "object") {
            text = [value.message, value.stack, value.filename]
              .filter(Boolean)
              .join(" ");
          }

          return (
            text.indexOf("Failed to connect to MetaMask") !== -1 ||
            (text.indexOf("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn") !== -1 &&
              text.indexOf("inpage.js") !== -1)
          );
        }

        function stopEvent(event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        window.addEventListener(
          "error",
          function (event) {
            if (
              isMetaMaskConnectionError(event.error) ||
              isMetaMaskConnectionError({
                message: event.message,
                filename: event.filename,
              })
            ) {
              stopEvent(event);
            }
          },
          true
        );

        window.addEventListener(
          "unhandledrejection",
          function (event) {
            if (isMetaMaskConnectionError(event.reason)) {
              stopEvent(event);
            }
          },
          true
        );
      })();
    `
    : "";

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
        {suppressKnownExtensionDevErrors && (
          <script
            id="suppress-metamask-dev-overlay-error"
            dangerouslySetInnerHTML={{ __html: suppressKnownExtensionDevErrors }}
          />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
