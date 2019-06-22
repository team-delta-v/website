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
  </div>
)
