import React from 'react'
import SiteNavbar from '../../Componets/SiteNavbar/SiteNavbar'
import Footer from '../../Componets/Footer/Footer'
import { IoIosArrowForward } from "react-icons/io";

function Home() {
    return (
        <>
            <SiteNavbar />

            <div className='w-full mt-28'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row'>
                        <div className="md:basis-6/12 flex items-center">
                            <h1 className='text-5xl font-semibold ml-5 leading-tight'>
                                ADOPT A 🐶<br />
                                {/* <img width={"50px"} src={require('../../assets/paw_vector-main.png')} alt="" /> */}
                                <span className='text-[#FFB5A7]'>FOREVER</span> <br /> <span className='text-[#FFB5A7]'>FRIEND</span> TODAY <br />
                                <button class="button-36 mt-8" role="button">Explore &nbsp;<IoIosArrowForward /></button>
                            </h1>
                        </div>
                        <div className="md:basis-6/12 mt-4 md:mt-0">
                            <img src={require('../../assets/mainpageimg.png')} alt="" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full pt-20 pb-20'>
                <div className='container mx-auto'>
                    <h1 className='text-5xl font-extrabold'>OUR SERVICES</h1>
                    <p className='text-3xl font-bold font-sans text-[#070706]'>Service loved by people and pets</p>
                    <div className='flex flex-wrap mx-auto gap-8 mt-8'>
                        <div className='flex flex-col  md:w-3/12 align-i-center border-2 border-[#FFB5A7] rounded-2xl h-80 w-80 m-10 mx-auto'>
                            <img width={"80px"} src={require('../../assets/vec_paw.png')} alt="" />
                            <p className='font-sans font-bold text-2xl'>Adopt a pet</p>
                        </div>
                        <div className='flex flex-col  md:w-3/12 align-i-center border-2 border-[#FFB5A7] rounded-2xl h-80 w-80 m-10 mx-auto'>
                            <img width={"80px"} src={require('../../assets/vec_med.png')} alt="" />
                            <p className='font-sans font-bold text-2xl'>Doctor Support</p>
                        </div>
                        <div className='flex flex-col  md:w-3/12 align-i-center border-2 border-[#FFB5A7] rounded-2xl h-80 w-80 m-10 mx-auto'>
                            <img width={"80px"} src={require('../../assets/vec_search.png')} alt="" />
                            <p className='font-sans font-bold text-2xl'>Search Partner</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full pt-20 pb-20'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-5/12">
                            <img className="w-full max-w-md mx-auto" src={require('../../assets/mainpagebottom.png')} alt="Pawsome Community" />
                        </div>
                        <div className="flex flex-col items-start md:w-7/12 mt-8 md:mt-0 md:ml-8">
                            <p className="font-bold text-4xl md:text-5xl mb-4">ABOUT US</p>
                            <p className="text-lg md:text-xl leading-snug">
                                Welcome to Pawsome Community! We're all about pets and the people who love them. Whether you're looking for a new pet, need a nearby vet, or want to find a mate for breeding, we're here to help. Our goal is to create a friendly place where pet owners can connect, share advice, and make furry friends. Join us in celebrating the special bond between humans and their animal companions. Let's make the world a happier place for pets, one paw at a time.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Home;