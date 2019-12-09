export default ({ children, href }) => (
  <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
    {children}{' '}
    <img
      src="/static/link.svg"
      alt=""
      style={{
        display: 'inline',
        height: '0.6em',
        width: '0.6em',
      }}
    />
  </a>
)
