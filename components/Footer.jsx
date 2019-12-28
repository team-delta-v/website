import ExternalLink from './ExternalLink'

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
      <p>
        <b>Sponsored by: </b>{' '}
        <ExternalLink href="https://browserstack.com">
          <img
            src="/static/browserstack.svg"
            alt="BrowserStack"
            style={{ height: '1.3em', verticalAlign: 'middle' }}
          />
        </ExternalLink>
      </p>

      <style jsx>{`
        div {
          margin-top: 10px;
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
          text-align: center;
        }
      `}</style>
    </div>
  )
}
