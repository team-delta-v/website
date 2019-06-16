import React from 'react'
import interpolate from 'color-interpolate'
import io from 'socket.io-client'
import { ClocksyClient } from 'clocksy'

const colormap = interpolate([
  '#d60c0c',
  '#ffae00',
  '#ffe900',
  '#15ff00',
  '#00ffe5',
  '#2237d6',
  '#5d00c1',
  '#d60c0c',
])

function reduce(time) {
  return (time / 20000) % 1
}

function getColor(time) {
  const direction = (time / 15) % 360
  const color1 = colormap(reduce(time - 4000))
  const color2 = colormap(reduce(time))
  return `linear-gradient(${direction}deg, ${color1}, ${color2})`
}

export default class extends React.Component {
  state = { delta: 0 }

  componentDidMount() {
    this.animate()

    this.socket = io('https://ntp.glitch.me/', { transports: ['websocket'] })
    this.clocksy = new ClocksyClient({
      sendRequest: data => {
        this.socket.emit('t', data)
      },
      updatePeriod: 500,
      alpha: 0.05,
    })

    this.socket.on('connect', () => this.clocksy.start())
    this.socket.on('disconnect', () => this.clocksy.stop())

    this.socket.on('t', data => {
      const delta = this.clocksy.processResponse(data)
      this.setState({ delta })
    })
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf)
    this.socket.close()
    this.clocksy.stop()
  }

  animate = () => {
    this.raf = requestAnimationFrame(() => {
      const time = Date.now() + this.state.delta
      this.setState({ color: getColor(time) })
      this.animate()
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <p className="text">ΔV</p>
        </div>
        <style jsx>
          {`
            .text {
              background: ${this.state.color};

              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              font-size: 80vmin;
              font-family: Jura, Roboto, sans-serif;
              font-weight: 400;

              text-align: center;
              overflow: visible;
              margin: 0;

              user-select: none;
            }

            .container {
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    )
  }
}
