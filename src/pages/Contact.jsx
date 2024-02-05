import React from 'react'
import Navbar from '../components/Navbar/navbar'
import ContainerLg from '../components/Container-lg/container-lg'
import Footer from '../components/Footer/footer'
import MainContact from '../components/MainContact/mainContact'

const Contact = () => {
    return (
        <>
            <Navbar />
            <ContainerLg
                titleText={"Contact Us"}
                inside={<MainContact />}
            />
            <Footer />
        </>
    )
}

export default Contact