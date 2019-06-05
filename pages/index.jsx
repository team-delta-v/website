import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/Layout'
import Logo from '../components/Logo'

export default () => (
  <Layout>
    <Logo />
    <br style={{ height: '10vh' }} />
    <Container fluid>
      <Row>
        <Col>
          <h1 style={{ fontSize: '70px', textAlign: 'center', margin: 0 }}>
            Delta V
          </h1>
          <p style={{ textAlign: 'center' }}>
            Daniel Huang • Havish Netla • Jeffrey Yang • Max Hollis
          </p>
          <br style={{ height: '30px' }} />
          <p>
            We are a team of high school students based in Maryland who compete
            in hackathons to practice our programming skills and win prizes.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Projects</h2>
        </Col>
      </Row>
      <table>
        <tbody>
          <tr>
            <td>News 451</td>
            <td>
              News 451 is a minimalistic web application that allows users to
              see the recent news without clutter or ads. Users can gauge
              reliability and bias of their news using our custom machine
              learning model.
            </td>
            <td>
              1st Place for Civic Track in the Sixth Baltimore Hackathon at
              University of Baltimore ($1000)
            </td>
          </tr>
          <tr>
            <td>Rocket Launch</td>
            <td>
              Rocket Launch is an intuitive web application that allows the user
              plan seeing rocket launches. The software displays future rocket
              launch data, international launch sites, and atmospheric
              conditions.
            </td>
            <td>
              2nd Place and Global Nominee in the 2018 Space Apps Challenge at
              Johns Hopkins University ($500)
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </Container>
    <style jsx>
      {`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 500;
          text-align: center;
        }

        table,
        tr,
        td {
          border: 1px gray solid;
          border-collapse: collapse;
          padding: 10px;
        }
      `}
    </style>
  </Layout>
)
