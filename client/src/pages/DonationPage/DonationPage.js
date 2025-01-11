import donation from '../../assets/donation.png'
import Navbar from '../../components/Navbar/Navbar'
import './DonationPage.css'

export default function DonationPage() {
    return (
        <div>
            <Navbar />
            <main className="mainDN">
                <section className="heroDN">
                    <h1 className="headingDN">
                        Together Against Animal Homelessness.
                        <span className="subheadingDN">Every Penny Counts.</span>
                    </h1>
                </section>

                <section className="donationSectionDN">
                    <div className="contentDN">
                        <h2 className="sectionTitleDN">Donate & Support</h2>
                        <p className="textDN">
                            Every day, animals in our community suffer from neglect, abuse, and homelessness.
                        </p>
                        <p className="textDN">
                            iAdopt is dedicated to providing the care and support these animals need to thrive.
                        </p>
                        <p className="textDN">
                            By donating to our cause, you can help make a difference in the lives of these innocent creatures.
                            Your generosity will enable us to continue our work rescuing and rehoming animals, as well as
                            educating the public on the importance of pet adoption.
                        </p>
                        <p className="textDN">
                            Please consider making a donation today and join us in our mission to create a better world for all dogs and cats.
                        </p>
                    </div>
                    <div className="imageContainerDN">
                        <img
                            src={donation}
                            alt="Donation box and supplies"
                            width={500}
                            height={400}
                            className="imageDN"
                        />
                    </div>
                </section>

                <section className="bankDetailsDN">
                    <div className="detailsGridDN">
                        <div className="detailItemDN">
                            <span className="labelDN">ACCOUNT NAME:</span>
                            <span className="valueDN">PAWSOME COMMUNITY</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">BANK NAME:</span>
                            <span className="valueDN">HDFC</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">ACCOUNT NUMBER:</span>
                            <span className="valueDN">502 000 5397 2406</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">BRANCH NAME:</span>
                            <span className="valueDN">BESANT NAGAR</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">ACCOUNT TYPE:</span>
                            <span className="valueDN">CURRENT ACCOUNT</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">GPAY UPI:</span>
                            <span className="valueDN">pawsomecommunity@okhdfcbank</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">IFSC CODE:</span>
                            <span className="valueDN">HDFC0000010</span>
                        </div>
                        <div className="detailItemDN">
                            <span className="labelDN">PHONEPE UPI:</span>
                            <span className="valueDN">pawsomecommunity@ybl</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

