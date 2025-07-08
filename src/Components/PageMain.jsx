import ExperienceLanguaje from "./ExperienceLanguaje"
import Footer from "./Footer"
import Header from "./Header"
import Presentation from "./Presentation"
import Experience from "./Experience"
import Servicios from "./Servicios"
import Contact from "./Contact"

const PageMain = () => {

    return(
        <>
            <Header/>
            <Presentation/>
            <ExperienceLanguaje/>
            <Experience/>
            <Servicios/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default PageMain;