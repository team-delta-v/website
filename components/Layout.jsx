import Head from 'next/head'
import { useEvent, useUpdate } from 'react-use'

const HideScrollbar = () => (
  <style jsx global>{`
    ::-webkit-scrollbar {
      display: none;
    }
  `}</style>
)

export default ({ children }) => {
  const update = useUpdate()

  useEvent('resize', () => {
    update()
  })

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#292a36" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#292a36" />
        <link rel="manifest" href="/static/manifest.json" />
        <title>Delta V</title>
      </Head>
      <div
        style={{
          fontFamily: 'Roboto',
          color: 'white',
          margin: 'auto',
          textAlign: 'justify',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {children}
        <style jsx global>
          {`
            body {
              background: #292a36;
              margin: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-weight: 500;
            }
          `}
        </style>
        {process.browser && window.innerHeight === window.outerHeight && (
          <HideScrollbar />
        )}
      </div>
    </>
  )
}
