export default () => (
  <div>
    <div className="container">
      <p className="text">ΔV</p>
    </div>
    <style jsx>
      {`
        .text {
          color: orange;

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
