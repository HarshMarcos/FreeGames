import React, { useState } from 'react'
import './mainCatalogue.css'
import { useEffect } from 'react';
import MiniCardRow from '../miniCardRow'

const MainCatalogue = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPErPage] = useState(21);
    const [selectedItem, setSelectedItem] = useState(21);
    const [isOpen, setIsOpen] = useState(false);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);
    const handleItemsChange = (e) => {
        setItemsPErPage(parseInt(e, 10));
        setSelectedItem(parseInt(e, 10));
        handleDropDown();
    }

    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='catalogue-list'>
            <div className='filters'>
                <div className="select">
                    <button>
                        <span>{selectedItem} Items per page</span>
                        <span className={isOpen ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></span>
                    </button>
                    {
                        isOpen ? (
                            <div className='optgroup'>
                                {[21, 30, 45, 60].map((option) => (
                                    <div
                                        key={option}
                                        className={`select-option ${option === selectedItem ? 'selected' : ''}`}
                                        onClick={() => handleItemsChange(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </div>
                <div className='page-count'>
                    <span className='fa-solid fa-thumbtack'></span>
                    <span>{currentPage}</span>
                </div>
            </div>
            <MiniCardRow data={currentItems} />

            <div className='page-controls'>
                <button className='fa fa-arrow-left' onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            disabled={currentPage === index + 1}
                        >
                            {index + 1}
                        </button>
                    ))
                }
                <button
                    className='fa fa-arrow-right'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>
            <br />
        </div>
    )
}

export default MainCatalogue