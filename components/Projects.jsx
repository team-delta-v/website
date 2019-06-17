import Project from './Project'

export default () => (
  <div style={{ paddingTop: '15px' }}>
    <h1>Our Projects</h1>
    <h2>News 451</h2>
    <Project />
    <style jsx>
      {`
        img {
          max-width: 100%;
        }
      `}
    </style>
  </div>
)
