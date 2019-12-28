import Layout from '../components/Layout'
import Info from '../components/Info'
import Logo from '../components/Logo'

export default () => (
  <Layout>
    <div className="parallax">
      <div className="parallax-layer parallax-layer-back">
        <Logo />
      </div>
      <div className="parallax-layer parallax-layer-base">
        <Info />
      </div>
    </div>
    <style jsx global>
      {`
        .parallax {
          perspective: 1px;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .parallax-layer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .parallax-layer-base {
          transform: translateZ(0);
          margin-top: 100vh;
          background: #292a36;
        }
        .parallax-layer-back {
          transform: translateZ(-1px);
          z-index: -1;
        }
      `}
    </style>
  </Layout>
)
