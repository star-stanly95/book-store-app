import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import Book from '../Book/Book'
import CreateBook from '../Book/CreateBook'


const BookRoutes =()=>{
    return(
        <Routes>
            <Route path='/Book' Component={Book} />
            <Route path='/CreateBook' Component={CreateBook} />
        </Routes>
    )
}

export default BookRoutes;