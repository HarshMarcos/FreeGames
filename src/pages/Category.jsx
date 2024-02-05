import React from 'react'
import Navbar from '../components/Navbar/navbar'
import ContainerLg from '../components/Container-lg/container-lg'
import Footer from '../components/Footer/footer'
import CategoryList from '../components/CategoryList/categoryList'

const Category = () => {
    return (
        <>
            <Navbar />
            <ContainerLg titleText={"Choose a category"} inside={<CategoryList />} />
            <Footer />
        </>
    )
}

export default Category