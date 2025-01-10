import React from 'react'
import './Whattodo.css'
import Navbar from '../../components/Navbar/Navbar'
import frame1 from '../../assets/Frame 1.jpg'
import frame2 from '../../assets/Frame 2.jpg'
import frame3 from '../../assets/Frame 3.jpg'
import frame4 from '../../assets/Frame 4.jpg'
import frame5 from '../../assets/Frame 5.jpg'
import Footer from '../../components/Footer/Footer'

const Whattodo = () => {
    return (
        <div>
            <Navbar/>
            <div className="containerWTD">
                <main className="main-contentWTD">
                    <section className="content-sectionWTD reverseWTD">
                        <div className="text-contentWTD">
                            <h2>What you can do ?</h2>
                            <p>
                                Do you want to bring about a positive change in the lives of our
                                voiceless friends? Here's a great opportunity to show your
                                compassion and love. Choose the one that suits you best.
                            </p>
                        </div>
                        <div className="image-contentWTD">
                            <img
                                src={frame1}
                                alt="Person with a happy dog"
                                className="section-imageWTD"
                            />
                        </div>
                    </section>

                    <section className="content-sectionWTD">
                        <div className="text-contentWTD">
                            <h2>Foster</h2>
                            <p>
                                Fostering can be a rewarding experience, and can transform a
                                homeless animal's life in a big way. You can help raise and care
                                for homeless pets and shower them with love and affection until
                                the little bundles of joy find their forever homes.
                                If you're looking to foster an animal, kindly click on the link
                                below that will take you to a for. Please fill in the form and we'll
                                get back to you when there is an animal that suits your
                                description.
                            </p>
                        </div>
                        <div className="image-contentWTD">
                            <img
                                src={frame2}
                                alt="Person with a happy dog"
                                className="section-imageWTD"
                            />
                        </div>
                    </section>

                    <section className="content-sectionWTD reverseWTD">
                        <div className="text-contentWTD">
                            <h2>Volunteer</h2>
                            <p>
                                We're always looking for extra pairs of hands to help us around.
                                You can join our growing family of selfless and dedicated
                                volunteers and help support our cause by sparing some time to
                                care for a pet in need, including participating in adoption
                                drives. And need we say this could be a great opportunity to
                                show your love to animals and give back to the community?
                            </p>
                        </div>
                        <div className="image-contentWTD">
                            <img
                                src={frame3}
                                alt="Volunteers helping with animals"
                                className="section-imageWTD"
                            />
                        </div>
                    </section>

                    <section className="content-sectionWTD">
                        <div className="text-contentWTD">
                            <h2>Feed the needy</h2>
                            <p>
                                Charity begins at home. A great way to do a good deed is to
                                start with taking care of stray animals in your neighbourhood.
                                Besides providing them with timely food and water, you can
                                protect them during the monsoons, attend to them when you
                                see a sick dog or get them treated when injured. You can also
                                take care of their vaccinations and speak up for them when you
                                see them being ill-treated.
                            </p>
                        </div>
                        <div className="image-contentWTD">
                            <img
                                src={frame4}
                                alt="Dog needing help"
                                className="section-imageWTD"
                            />
                        </div>
                    </section>

                    <section className="content-sectionWTD reverseWTD">
                        <div className="text-contentWTD">
                            <h2>Donate and Support</h2>
                            <p>
                                A small contribution can go a long way. You can help support
                                our mission and save a puppy or kitten by making a monetary
                                donation that is within your reach. The funds received will be
                                used for medical needs like vaccinations, sterilization or
                                towards treatment during an injury. Your donation can help
                                scores of homeless cats and dogs in getting a better
                                life.
                            </p>
                        </div>
                        <div className="image-contentWTD">
                            <img
                                src={frame5}
                                alt="Donation box for animal welfare"
                                className="section-imageWTD"
                            />
                        </div>
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default Whattodo
