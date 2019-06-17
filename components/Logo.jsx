import React from 'react'
import interpolate from 'color-interpolate'
import clock from 'internet-time'

const colormap = interpolate([
  '#ff0000',
  '#ffae00',
  '#ffe900',
  '#15ff00',
  '#00ffe5',
  '#2237d6',
  '#5d00c1',
  '#ff00ff',
  '#a3007a',
  '#ff0000',
])

function reduce(time) {
  return (time / 20000) % 1
}

function getColor(time) {
  const direction = (time / 40) % 360
  const color1 = colormap(reduce(time - 4000))
  const color2 = colormap(reduce(time - 2000))
  const color3 = colormap(reduce(time))
  return `linear-gradient(${direction}deg, ${color1}, ${color2}, ${color3})`
}

export default class extends React.Component {
  state = {}

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loaded: true })
    })
    this.animate()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf)
  }

  animate = () => {
    this.raf = requestAnimationFrame(() => {
      const time = clock.now()
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

              opacity: ${this.state.loaded ? 1 : 0};
              transition: opacity 300ms;

              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;

              font-size: 100vmin;
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
