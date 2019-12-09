export default ({ children }) => {
  return (
    <div
      style={{
        background: 'orange',
        padding: '0.15em 0.5em',
        borderRadius: '2em',
        fontSize: '0.6em',
        verticalAlign: 'middle',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}
