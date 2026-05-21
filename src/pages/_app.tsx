import "@/styles/globals.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";
import * as gtag from "../lib/gtag";
import { ConsentProvider } from "../context/ConsentContext";
import Script from "next/script";
import { initPerformanceMonitoring, preloadCriticalResources } from "../lib/performance";

function unregisterDevelopmentServiceWorkers() {
  if (
    process.env.NODE_ENV !== "development" ||
    typeof window === "undefined" ||
    !("serviceWorker" in navigator)
  ) {
    return;
  }

  void navigator.serviceWorker
    .getRegistrations()
    .then((registrations) =>
      Promise.all(registrations.map((registration) => registration.unregister()))
    )
    .catch(() => undefined);

  if ("caches" in window) {
    void caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
      )
      .catch(() => undefined);
  }
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function AnalyticsScripts() {
  const router = useRouter();

  useEffect(() => {
    gtag.initGTM();
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}

function ProgressBar() {
  const router = useRouter();

  useEffect(() => {
    // Configure NProgress
    NProgress.configure({
      showSpinner: true,
      barSelector: "#nprogress .bar",
      trickleSpeed: 200,
      minimum: 0.3,
      easing: "ease",
      speed: 500,
    });

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return null;
}

function Main({ Component, pageProps }: Pick<AppPropsWithLayout, 'Component' | 'pageProps'>) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const renderComponent = <>{getLayout(<Component {...pageProps} />)}</>;

  return <div>{renderComponent}</div>;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  // Initialize performance monitoring and preload critical resources
  useEffect(() => {
    unregisterDevelopmentServiceWorkers();
    initPerformanceMonitoring();
    preloadCriticalResources();
  }, []);
  
  return (
    <ConsentProvider>
      {/* <CookieConsentBanner /> */}
      {/* Google Analytics (gtag.js) - Deferred for better performance */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script
            id="gtag-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        </>
      )}
      <AnalyticsScripts />
      <ProgressBar />
      <Main Component={Component} pageProps={pageProps} />
    </ConsentProvider>
  );
}
