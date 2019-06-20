import React from 'react'

export default props => (
  <div style={{ marginTop: '100px', marginBottom: '100px' }}>
    <div
      style={{
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1>{props.name}</h1>
      <img alt="News451" src={props.img} />
    </div>
    <p>{props.description}</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px',
      }}
    >
      <img
        alt="bmore"
        src={props.icon}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />

      <div style={{ paddingLeft: '50px' }}>
        <h3 style={{ fontSize: '1.625em' }}>
          <b>Awarded</b>
        </h3>
        <p style={{ marginTop: '10px' }}>
          {props.prizeDescription} <br />({props.prize})
        </p>
      </div>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 3.5em;
        }
        h3 {
          margin: 0px 0px 0px 0px;
        }
        img {
          width: 100%;
        }
      `}
    </style>
  </div>
)
