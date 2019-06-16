export default () => (
  <table>
    <tbody>
      <tr className="names">
        <td>Daniel Huang</td>
        <td>Havish Netla</td>
        <td>Jeffrey Yang</td>
        <td>Max Hollis</td>
      </tr>
      <tr className="roles">
        <td>FE/BE</td>
        <td>FE/ML</td>
        <td>UI/UX</td>
        <td>ML/UX</td>
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
        border-left: 1px solid white;
      }

      .roles {
        font-size: 0.8em;
        color: lightgrey;
      }
    `}</style>
  </table>
)
