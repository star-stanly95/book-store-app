import React from 'react'
import useAuth from '../Auth//AuthContext'

const Author = () => {

    const { isLoggedIn, setLoggedIn } = useAuth()

    return (
        <div>Hello Author</div>
    )
}

export default Author;