import Head from 'next/head'

export default ({ children }) => (
  <div>
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
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'justify',
        lineHeight: 1.5,
        fontWeight: 400,
      }}
    >
      <div>{children}</div>
      <style jsx global>
        {`
          body {
            background: #292a36;
            margin: 0;
          }

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  </div>
)
