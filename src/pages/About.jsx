import React from 'react'
import Header from './../components/Navbar/navbar'
import ContainerLg from '../components/Container-lg/container-lg.jsx'
import MainAbout from '../components/MainAbout/mainAbout.jsx'
import Footer from '../components/Footer/footer.jsx'
const About = () => {
    return (
        <>
            <Header />
            <ContainerLg titleText={"About"} inside={<MainAbout />} />
            <Footer />
        </>
    )
}

export default About