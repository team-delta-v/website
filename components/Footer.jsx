export default () => {
  return (
    <div>
      <p>
        Proudly based in Maryland{' '}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/1500px-Flag_of_Maryland.svg.png"
          alt="Maryland Flag"
        />
      </p>
      <p>
        <b>Contact us:</b> team@deltav.ml <b>Verification:</b> Contact for the
        Official Document
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
          color: grey;
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}
