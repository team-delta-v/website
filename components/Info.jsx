import { useIntersection } from 'react-use'
import { useRef } from 'react'
import Projects from './Projects'
import Intro from './Intro'
import Footer from './Footer'

export default () => {
  const scrollRef = useRef()
  const intersection = useIntersection(scrollRef, {
    rootMargin: '0px 0px -100% 0px',
  })

  const light = intersection && intersection.isIntersecting

  return (
    <div
      style={{
        background: light ? 'white' : '#292a36',
        color: light ? 'black' : 'white',
        boxShadow: '0px -5px 20px 0 rgba(0,0,0,0.3)',
        transition: '300ms',
        padding: '30px',
      }}
      ref={scrollRef}
    >
      <div style={{ margin: '15px 0 0 0' }}>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <Intro light={light} />
          <Projects light={light} />

          <div style={{ borderTop: '1px #ccc solid', marginTop: '50px' }} />
          <Footer />
          <br />
        </div>
      </div>
    </div>
  )
}
