import Award from './Award'
import ExternalLink from './ExternalLink'

export default () => {
  return (
    <div>
      <h2>Our Projects</h2>
      <h3>
        <ExternalLink href="https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/delta-v/project">
          InfernoAI
        </ExternalLink>{' '}
        <Award>First Place</Award>
      </h3>
      <h4>Space Apps 2019 Washington</h4>
      <img
        src="https://dan.js.org/static/infernoai.png"
        alt="InfernoAI website"
      />
      <p>
        Machine learning wildfire prediction platform that leverages NASA
        satellite data, temperature data, and humidity data to predict possible
        future wildfires, allowing users to monitor locations and be alerted
        when there is a high risk of a wildfire.
      </p>
      <h3>
        <ExternalLink href="https://devpost.com/software/insightai">
          InsightAI
        </ExternalLink>{' '}
        <Award>Top 10</Award>
      </h3>
      <h4>PennApps 2018 Fall</h4>
      <p>
        Deep learning live object and depth recognition with binaural AR audio
        spatialization and text-to-speech to help the visually impaired see the
        world with sound using only a smartphone and headphones.
      </p>
      <h3>
        <ExternalLink href="https://devpost.com/software/news-451">
          News 451
        </ExternalLink>{' '}
        <Award>Civic Track First Place</Award>
      </h3>
      <h4>Sixth Baltimore Hackathon</h4>
      <p>
        News 451 is a minimalistic web application that allows users to see the
        recent news without clutter or ads. Users can gauge reliability and bias
        of their news using our custom machine learning model.
      </p>
      <img src="https://dan.js.org/static/news451.png" alt="News 451 website" />
      <h3>
        <ExternalLink href="https://2018.spaceappschallenge.org/challenges/can-you-build/when-next-rocket-launch/teams/delta-v/project">
          Rocket Launch
        </ExternalLink>{' '}
        <Award>Second Place</Award>
      </h3>
      <h4>Space Apps 2018 Baltimore</h4>
      <img src="https://dan.js.org/static/rocket.png" alt="Rocket Launch App" />
      <p>
        Rocket Launch is an intuitive web application that allows the user plan
        seeing rocket launches. The software displays future rocket launch data,
        international launch sites, and atmospheric conditions.
      </p>
      <style jsx>
        {`
          img {
            max-width: 100%;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 6px;
          }

          h2 {
            font-size: 36px;
          }

          h3 {
            font-size: 30px;
            margin: 50px 0px 0px 0px;
          }

          h4 {
            font-size: 15px;
            color: grey;
            margin-top: 5px;
          }
        `}
      </style>
    </div>
  )
}
