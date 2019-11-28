import React from 'react'
import Categories from '../components/Categories'
import NewsList from '../components/NewsList'
const NewPage = ({match}) => {
    const category = match.params.category || "all"
    return (
    <>
    <Categories/>
    <NewsList category={category}/>
    </>
    )
}




export default NewPage;