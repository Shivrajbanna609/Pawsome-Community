import React from 'react'
import SiteNavbar from '../../Componets/SiteNavbar/SiteNavbar'
import Footer from '../../Componets/Footer/Footer'
import './Pet.css';
import Cards from '../Crads/Cards';
// import { IoIosArrowForward } from 'react-icons/io';

function Pet() {
    return (
        <>
            <SiteNavbar />

            <div className='h-fit pt-5'>
                <div className='flex mx-auto container h-52 mt-32 rounded-3xl bg-[#f9dcc4]'>
                    <div className=' md:basis-6/12 w-full h-full flex align-i-center'>
                        {/* <select name="" onchange="" onclick="return false;" id="">
                            <option value="">Seleciona una Opcion </option>
                            <option value="1">Select option 1</option>
                            <option value="2" >Select option 2</option>
                            <option value="3">Select option 3</option>
                        </select> */}
                    </div>
                    <div className=' md:basis-6/12 w-full h-full flex align-i-center'>
                        <button class="button-36" role="button">Filter </button>
                    </div>
                </div>
            </div>

            <Cards />

            <Footer />
          
        </>
    )
}

export default Pet;