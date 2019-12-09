import ExternalLink from './ExternalLink'

export default ({ light }) => (
  <table>
    <tbody>
      <tr className="names">
        <td>
          <ExternalLink href="https://dan.js.org">Daniel Huang</ExternalLink>
        </td>
        <td>
          <ExternalLink href="https://jefferyy.dev">Jeffrey Yang</ExternalLink>
        </td>
        <td>
          <ExternalLink href="https://havish.dev">Havish Netla</ExternalLink>
        </td>
        <td>Max Hollis</td>
      </tr>
      <tr className="roles">
        <td>President + Lead Dev</td>
        <td>Machine Learning + Frontend</td>
        <td>Machine Learning + Backend</td>
        <td>Graphics + Design</td>
      </tr>
    </tbody>
    <style jsx>{`
      table {
        margin: 0 auto;
        border-collapse: collapse;
      }

      td {
        padding: 0px 15px;
        text-align: center;
      }

      table {
        border-style: hidden;
      }

      table td {
        border-left: 1px solid ${light ? '#555' : 'lightgrey'};
      }

      .roles {
        font-size: 0.75em;
        color: ${light ? '#555' : 'lightgrey'};
        text-transform: uppercase;
      }
    `}</style>
  </table>
)
