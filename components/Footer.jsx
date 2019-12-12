export default () => {
  return (
    <div>
      <p>
        Proudly based in Maryland{' '}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1500px-Flag_of_Maryland.svg.png"
          alt="Maryland Flag"
        />
        <b>Contact us:</b> &apos;team&apos; at deltav.ml
      </p>

      <style jsx>{`
        div {
          margin-top: 50px;
          text-align: center;
        }

        img {
          height: 0.8em;
        }

        b {
          padding-left: 20px;
        }

        p {
          color: #ccc;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
