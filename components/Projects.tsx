import React from 'react'

export default () => (
  <div>
    <h2>Our Projects</h2>
    <h3>News 451</h3>
    <p>
      News 451 is a minimalistic web application that allows users to see the
      recent news without clutter or ads. Users can gauge reliability and bias
      of their news using our custom machine learning model.
    </p>
    <img
      src="https://cdn.discordapp.com/attachments/583367531406950431/585948245461696531/GroupNews451Combined.png"
      alt="News 451 website"
    />
    <p>
      1st Place for Civic Track in the Sixth Baltimore Hackathon at University
      of Baltimore ($1000)
    </p>
    <h3>Rocket Launch</h3>
    <p>
      Rocket Launch is an intuitive web application that allows the user plan
      seeing rocket launches. The software displays future rocket launch data,
      international launch sites, and atmospheric conditions.
    </p>
    <p>
      2nd Place and Global Nominee in the 2018 Space Apps Challenge at Johns
      Hopkins University ($500)
    </p>
    <style jsx>
      {`
        img {
          max-width: 100%;
        }
      `}
    </style>
  </div>
)
