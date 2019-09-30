export default () => (
  <table>
    <tbody>
      <tr className="names">
        <td>Daniel Huang</td>
        <td>Jeffrey Yang</td>
        <td>Havish Netla</td>
        <td>Max Hollis</td>
      </tr>
      <tr className="roles">
        <td>President</td>
        <td>Machine Learning</td>
        <td>Full Stack</td>
        <td>User Interface</td>
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
        font-size: 0.75em;
        color: lightgrey;
        text-transform: uppercase;
      }
    `}</style>
  </table>
)
