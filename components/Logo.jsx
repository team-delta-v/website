import { useState, useRef } from 'react'
import { useIntersection } from 'react-use'

export default () => {
  const [black, setBlack] = useState(false)

  const intersectionRef = useRef()
  const intersection = useIntersection(intersectionRef, {
    rootMargin: '-100% 0px 0px 0px',
  })

  return (
    <div>
      <div
        className="container"
        style={{
          background:
            intersection && intersection.isIntersecting && black && 'black',
          transition: '300ms',
        }}
        role="presentation"
        onClick={() => {
          setBlack(!black)
        }}
        ref={intersectionRef}
      >
        <iframe
          src="https://dan.js.org/delta-v/logo-transparent"
          title="Delta V Logo"
        />
      </div>
      <style jsx>
        {`
          iframe {
            height: 120vmin;
            width: 180vmin;

            transform: scale(1.01, 1) translateY(2.3%);

            text-align: center;
            overflow: visible;
            margin: 0;

            user-select: none;

            border: 0;

            pointer-events: none;
          }

          .container {
            height: 200vh;
            width: 200vw;
            margin-top: -50vh;
            margin-left: -50vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}
