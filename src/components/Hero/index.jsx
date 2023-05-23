import './index.css'

const Hero = ({image, text}) => {
  return (
    <div className="hero" style={{backgroundImage: `url(/img/${image}.png)`}}>
        {text && <h1>{text}</h1>}
    </div>
  )
}



export default Hero