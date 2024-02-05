import React, { useState } from 'react'
import Navbar from '../components/Navbar/navbar'
import MainGame from '../components/MainGame/mainGame'
import Container from '../components/Container/container'
import Footer from '../components/Footer/footer'
import ContainerLg from '../components/Container-lg/container-lg'
import DescCardRow from '../components/DescCardRow/descCardRow'
import PopularContainer from '../components/popularContainer'
import ScrollButton from '../components/globals/scrollButton'

const Home = () => {


    return (
        <>
            <Navbar />
            <MainGame type={"pc"} />
            <Container />
            <ContainerLg
                titleText={"Recommendations"}
                inside={<DescCardRow start={0} />}
            />
            <MainGame type={"browser"} />
            <ContainerLg
                titleText={"Popular games"}
                inside={<PopularContainer />}
            />
            <ContainerLg
                titleText={"Recommendations"}
                inside={<DescCardRow start={5} />}
            />
            <ScrollButton />
            <Footer />
        </>
    )
}

export default Home