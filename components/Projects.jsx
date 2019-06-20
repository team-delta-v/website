import Project from './Project'

export default () => (
  <div style={{ paddingTop: '15px' }}>
    <Project
      name="News451"
      img="https://cdn.discordapp.com/attachments/583367531406950431/591331216989356063/news451big.png"
      description="News 451 is a minimalistic web application that allows users to see the recent news without clutter or ads. Users can gauge reliability and bias of their news using our custom machine learning model."
      icon="https://pbs.twimg.com/profile_images/839515548333420545/ThVZeSAJ_400x400.jpg"
      prizeDescription="1st place at the Sixth Baltimore Hackathon"
      prize="$1000"
    />
    <hr
      style={{
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    />
    <Project
      name="Rocket Launch"
      img="https://cdn.discordapp.com/attachments/583367531406950431/591332501931163816/rocketbig.png"
      description="Rocket Launch is an intuitive web application that allows the user plan seeing rocket launches. The software displays future rocket launch data, international launch sites, and atmospheric conditions."
      icon="http://static1.squarespace.com/static/56beda9601dbaed289db4f1d/t/58ccfff7725e25717a2d6b39/1537751827319/?format=1500w"
      prizeDescription="2nd Place and Global Nominee in the 2018 Space Apps Challenge at Johns Hopkins University"
      prize="$500"
    />
    <style jsx>
      {`
        img {
          max-width: 100%;
        }
        hr {
          border: 1px solid #383a46;
        }
      `}
    </style>
  </div>
)
