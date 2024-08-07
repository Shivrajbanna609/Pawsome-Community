import React from 'react'

function Footer() {
    return (
        <>
            <div className='h-fit bg-[#f8edeb]'>
                <div className='container mx-auto'>
                    <div className="flex flex-wrap pt-10 pb-10">
                        <div className="w-full md:w-3/12 p-4">
                            <div className="logo">
                                <img width="60px" src={require('../../assets/PC_logo.png')} alt="Logo" />
                            </div>
                        </div>
                        <div className="ft-card w-full md:w-3/12 p-4">
                            <h1 className="font-bold pb-5">Customer Care</h1>
                            <p className="w-14 mini-line rounded-full"></p>
                            <ul className="pt-8 leading-loose">
                                <li><a>About Us</a></li>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Products Return</a></li>
                                <li><a>Wholesale Policy</a></li>
                            </ul>
                        </div>
                        <div className="ft-card w-full md:w-3/12 p-4">
                            <h1 className="font-bold pb-5">Quick Shop</h1>
                            <p className="w-14 mini-line rounded-full"></p>
                            <ul className="pt-8 leading-loose">
                                <li><a>Pagination</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Accessories</a></li>
                                <li><a>Term of use</a></li>
                            </ul>
                        </div>
                        <div className="ft-card w-full md:w-3/12 p-4">
                            <h1 className="font-bold pb-5">Company</h1>
                            <p className="w-14 mini-line rounded-full"></p>
                            <ul className="pt-8 leading-loose">
                                <li><a>Help Center</a></li>
                                <li><a>Address Store</a></li>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Receivers & Amplifiers</a></li>
                                <li><a>Store Locations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;