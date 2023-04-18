import React from 'react'
import Header from './Header'


const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout