import React from 'react'
import './DoctorPage.css'
import Navbar from '../../components/Navbar/Navbar'

const doctors = [
    { name: 'Dr. Lakshmi', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Rakesh', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Rajesh', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Rivjan', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Shally', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Mevin', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Akash', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Rohan', qualification: 'BVSc and AH', imageUrl: '' },
    { name: 'Dr. Mohit', qualification: 'BVSc and AH', imageUrl: '' },
]

const DoctorPage = () => {
    return (
        <div>
            <Navbar/>
            <main className="mainDOC">
                <h1 className="titleDOC">OUR DOCTORS</h1>
                <div className="doctorsGridDOC">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="doctorCardDOC">
                            <div className="imageWrapperDOC">
                                {doctor.imageUrl ? (
                                    <img
                                        src={doctor.imageUrl}
                                        alt={doctor.name}
                                        width={120}
                                        height={120}
                                        className="doctorImageDOC"
                                    />
                                ) : (
                                    <div className="placeholderImageDOC" />
                                )}
                            </div>
                            <h2 className="doctorNameDOC">{doctor.name}</h2>
                            <p className="qualificationDOC">{doctor.qualification}</p>
                            <button className="appointmentButtonDOC">
                                Book Appointment
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default DoctorPage
