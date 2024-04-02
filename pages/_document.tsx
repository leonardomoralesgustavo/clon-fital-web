import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <meta
          name="facebook-domain-verification"
          content="r0un1om60kqg0rdrbt7bvg33dhtt57"
        /> */}
        {/* <!-- Google Tag Manager --> */}
        {/* <Script
          strategy="afterInteractive"
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WSW5WCH');`,
          }}
        /> */}
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Facebook Pixel Code --> */}
        {/* <Script
          strategy="afterInteractive"
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '1259712594933086'); 
            fbq('track', 'PageView');`,
          }}
        /> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1259712594933086&ev=PageView&noscript=1"
          />
        </noscript> */}
        {/* <!-- End Facebook Pixel Code --> */}

        {/* <!-- Google Tag Manager --> */}
        <Script
          strategy="afterInteractive"
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBR3KBCN');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        <Script
          strategy="afterInteractive"
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1846213399163360');
            fbq('track', 'PageView');`,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1846213399163360&ev=PageView&noscript=1"
          />
        </noscript>

        <meta
          name="facebook-domain-verification"
          content="zhs0tzv4cpnsvp117lao7rten46iap"
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RJ92NGTRWX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RJ92NGTRWX');
              `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSW5WCH"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBR3KBCN"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
