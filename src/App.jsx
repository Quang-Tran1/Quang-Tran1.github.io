import './App.css'
import portrait from './assets/portrait.png'
import signature from './assets/signature.png'

function App() {

  return (
    <>
      <header>
        <img src={signature} alt="Quang's signature" height="84px" className="logo-signature"/>
      </header>

      <section className="intro">
        <div>
          <h1 className="intro-hello">Hello, I'm Quang</h1>
          <p className="intro-description"> I'm passionate about building thoughtful software that makes someone's day a little easier and a lot more fun.</p>
        </div>
        <div>
          <img src={portrait} alt="portrait of quang" className="intro-portrait" />
        </div>
      </section>

      <footer>
        More Coming Soon
      </footer>
      

    </>
  )
}

export default App
