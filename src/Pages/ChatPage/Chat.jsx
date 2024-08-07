import React from 'react'
import SiteNavbar from '../../Componets/SiteNavbar/SiteNavbar'
import Footer from '../../Componets/Footer/Footer';

function Chat() {
    return (
        <>

            <SiteNavbar />
            <div className='w-screen h-60 flex align-i-center bg-slate-200 mt-28'>
                <div className='text-center leading-loose'>
                    <h1 className='text-5xl'>Chat</h1>
                    <h2 className='text-xl pt-4'>Home > Chat</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Chat;