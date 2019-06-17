import React from 'react'

export default class extends React.Component {
  state = {
    hover: false,
  }

  render() {
    return (
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/583367531406950431/585948245461696531/GroupNews451Combined.png"
          alt="News 451 website"
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        />
        <style jsx>
          {`
            img {
              max-width: 100%;
              opacity: ${this.state.hover ? '0.5' : '1.0'};
            }
          `}
        </style>
      </div>
    )
  }
}
