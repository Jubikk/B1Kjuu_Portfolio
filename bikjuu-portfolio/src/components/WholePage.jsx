import Navigation from './Navigation.jsx'
import AboutMe from './pages/AboutMe'
import LandingPage from './pages/LandingPage'
import Background from './pages/Background'

function WholePage() {

  return (
    <>
    <div>
      <Navigation/>
      <LandingPage/>
      <AboutMe/>
      <Background/>
    </div>
    </>
  )
}

export default WholePage
