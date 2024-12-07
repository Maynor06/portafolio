import ExperienceLanguaje from "./ExperienceLanguaje"
import Footer from "./Footer"
import Header from "./Header"
import Presentation from "./Presentation"
import Projects from "./Projects"

const PageMain = () => {

    return(
        <>
            <Header/>
            <Presentation/>
            <ExperienceLanguaje/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default PageMain;