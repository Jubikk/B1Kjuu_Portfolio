import Navigation from './Navigation.jsx'
import AboutMe from '../../pages/AboutMe.jsx'
import LandingPage from '../../pages/LandingPage.jsx'
import Background from '../../pages/Background.jsx'
import ThemeToggle from './ThemeToggle.jsx'

function  WholePage({theme,toggleTheme}) {
  return (
    <>
      <div className="min-h-screen" data-theme={theme}>
        <Navigation id="navigation" theme={theme}/>
        <ThemeToggle id="themeToggle" theme={theme} toggleTheme={toggleTheme}/>
        <LandingPage id="landingPage" theme={theme} />
        <AboutMe id="aboutMe" theme={theme} />
        <Background id="background" theme={theme}  />
      </div>
    </>
  )
}

export default WholePage