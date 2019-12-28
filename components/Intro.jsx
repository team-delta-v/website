import Names from './Names'

export default ({ light }) => (
  <div style={{ marginBottom: '100px' }}>
    <br />
    <h1
      style={{
        fontSize: '70px',
        textAlign: 'center',
        margin: 0,
        marginTop: '60px',
      }}
    >
      <img
        src="/static/logo.svg"
        alt="Logo"
        style={{
          maxHeight: '1em',
          maxWidth: '100%',
          transition: '300ms',
          filter: light && 'invert(1)',
        }}
      />
    </h1>

    <Names light={light} />
    <p
      style={{
        textAlign: 'center',
        fontSize: '25px',
      }}
    >
      Maryland&apos;s top high school hackathon team
    </p>
  </div>
)
