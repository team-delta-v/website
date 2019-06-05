import Head from 'next/head'

export default ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans|Jura|Roboto:400,500&display=swap"
        rel="stylesheet"
      />
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

          ::-webkit-scrollbar {
            display: none;
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
    </div>
  </>
)
