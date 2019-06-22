export default props => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.3)',
      padding: '15px',
      maxWidth: '400px',
    }}
  >
    <div>
      <h3
        style={{
          fontSize: '1.625em',
          fontWeight: 500,
          margin: '0',
        }}
      >
        <img
          alt="Icon"
          src={props.icon}
          style={{
            width: '1em',
            height: '1em',
            borderRadius: '50%',
            marginRight: '10px',
            verticalAlign: 'text-top',
          }}
          id="logo"
        />
        {props.place}
      </h3>
    </div>
    <div>
      <p style={{ marginTop: '10px' }}>
        {props.prizeDescription} ({props.prize})
      </p>
    </div>
  </div>
)
