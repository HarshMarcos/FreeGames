import React from 'react'
import Navbar from '../components/Navbar/navbar'
import ContainerLg from '../components/Container-lg/container-lg'
import ScrollButton from '../components/globals/scrollButton'
import MainCatalogue from '../components/MainCatalouge/mainCatalogue'
import Footer from '../components/Footer/footer';
import { useAzGames } from '../data'
const Catalouge = () => {
    const azGames = useAzGames();
    return (
        <>
            <Navbar />
            <ContainerLg
                titleText={"Games from A - Z"}
                inside={<MainCatalogue data={azGames || []} itemsPerPage={21} />}
            />
            <Footer />
            <ScrollButton />
        </>
    )
}

export default Catalouge