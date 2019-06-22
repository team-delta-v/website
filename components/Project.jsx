import React from 'react'
import Award from './Award'

export default props => (
  <div
    style={{
      padding: '30px',
      marginTop: '30px',
      marginBottom: '30px',
    }}
  >
    <div
      style={{
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1>{props.name}</h1>
      <img alt="Project" src={props.img} />
    </div>
    <p>{props.description}</p>
    <div>
      <Award
        prize={props.prize}
        icon={props.icon}
        prizeDescription={props.prizeDescription}
        place={props.place}
      />
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 3.5em;
        }
        h3 {
          margin: 0;
        }
        img {
          max-width: 100%;
        }
      `}
    </style>
  </div>
)
