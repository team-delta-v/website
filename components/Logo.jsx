export default () => (
  <div>
    <div className="container">
      <p className="text">ΔV</p>
    </div>
    <style jsx>
      {`
        .text {
          color: orange;

          font-size: 40vmin;
          font-family: Jura, Roboto, sans-serif;
          font-weight: 400;

          width: 100%;
          text-align: center;
          overflow: hidden;
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
