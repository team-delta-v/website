export default () => (
  <div>
    <div className="container">
      <iframe
        src="https://dan.js.org/delta-v/logo-large"
        title="Delta V Logo"
      />
    </div>
    <style jsx>
      {`
        iframe {
          height: 120vmin;
          width: 180vmin;

          transform: scale(1.01, 1) translateY(2.3%);

          text-align: center;
          overflow: visible;
          margin: 0;

          user-select: none;

          border: 0;
        }

        .container {
          height: 200vh;
          width: 200vw;
          margin-top: -50vh;
          margin-left: -50vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
)
