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
          src="https://danielh.cc/delta-v/logo-transparent"
          title="Delta V Logo"
        />
      </div>
      <style jsx>
        {`
          iframe {
            height: 100%;
            width: 100%;

            text-align: center;
            overflow: visible;
            margin: 0;

            user-select: none;

            border: 0;

            pointer-events: none;
          }

          .container {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(2);
          }
        `}
      </style>
    </div>
  )
}
