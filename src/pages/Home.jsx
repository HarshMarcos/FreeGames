import React, { useState } from 'react'
import Navbar from '../components/Navbar/navbar'
import MainGame from '../components/MainGame/mainGame'
import Container from '../components/Container/container'
import Footer from '../components/Footer/footer'
import ContainerLg from '../components/Container-lg/container-lg'
import DescCardRow from '../components/DescCardRow/descCardRow'
const Home = () => {


    return (
        <>
            <Navbar />
            <MainGame type={"pc"} />
            <Container />
            <ContainerLg
                titleText={"Recommendations"}
                inside={<DescCardRow />}
            />
            <MainGame type={"browser"} />
            <Footer />
        </>
    )
}

export default Home