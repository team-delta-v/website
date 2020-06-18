import Award from './Award'
import ExternalLink from './ExternalLink'

export default () => {
  return (
    <div>
      <h2>Our Projects</h2>
      <h3>
        <ExternalLink href="https://devpost.com/software/toolegaldidntread">
          TooLegalDidntRead
        </ExternalLink>{' '}
        <Award>First Place</Award>
      </h3>
      <h4>hths.hacks() 2020</h4>
      <img
        src="https://dan.js.org/static/tldr.png"
        alt="TooLegalDidntRead website"
      />
      <p>
        NLP legal document analyzer that summarizes and condenses legally
        binding documents, such as terms of service or privacy policy. Users are
        able to understand their rights and legal limitations through deep
        learning analysis of revelant US law, including case law and state law.
      </p>
      <h3>
        <ExternalLink href="https://devpost.com/software/supplysmart">
          SupplySmart
        </ExternalLink>{' '}
        <Award>First Place (finance track)</Award>
      </h3>
      <h4>HooHacks 2020</h4>
      <img
        src="https://dan.js.org/static/supplysmart.png"
        alt="SupplySmart website"
      />
      <p>
        Social media data analyzer that leverages a Rust-based natural language
        processing engine and a TensorFlow deep learning model to efficiently
        determine the retail availability of commonly needed physical items,
        based on user-generated social media posts. Users are able to locate
        stores and other retail outlets close to their physical location that
        are in stock with the user&apos;s requested items.
      </p>
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
      <h4>PennApps 2019 Fall</h4>
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
            text-align: left;
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
