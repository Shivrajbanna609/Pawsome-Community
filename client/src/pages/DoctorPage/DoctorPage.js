import React from 'react'
import './DoctorPage.css'
import Navbar from '../../components/Navbar/Navbar'

const doctors = [
    { name: 'Dr. Rajesh Verma', qualification: 'BVSc & AH', address: '123 MG Road, Delhi', mobile: '+91 9876543210', imageUrl: '' },
    { name: 'Dr. Priya Sharma', qualification: 'MVSc (Veterinary Surgery)', address: '45 Park Street, Kolkata', mobile: '+91 9876543211', imageUrl: '' },
    { name: 'Dr. Suresh Nair', qualification: 'BVSc & AH', address: '78 Anna Nagar, Chennai', mobile: '+91 9876543212', imageUrl: '' },
    { name: 'Dr. Meera Kapoor', qualification: 'MVSc (Animal Medicine)', address: '90 FC Road, Pune', mobile: '+91 9876543213', imageUrl: '' },
    { name: 'Dr. Anil Deshmukh', qualification: 'BVSc', address: '12 Andheri West, Mumbai', mobile: '+91 9876543214', imageUrl: '' },
    { name: 'Dr. Swati Joshi', qualification: 'MVSc (Veterinary Pathology)', address: '56 Civil Lines, Jaipur', mobile: '+91 9876543215', imageUrl: '' },
    { name: 'Dr. Ramesh Kumar', qualification: 'BVSc & AH', address: '34 Rajaji Nagar, Bangalore', mobile: '+91 9876543216', imageUrl: '' },
    { name: 'Dr. Neha Agarwal', qualification: 'MVSc (Veterinary Microbiology)', address: '76 Gomti Nagar, Lucknow', mobile: '+91 9876543217', imageUrl: '' },
    { name: 'Dr. Pankaj Gupta', qualification: 'BVSc', address: '22 Gachibowli, Hyderabad', mobile: '+91 9876543218', imageUrl: '' }
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
                            <p className="addressDOC">{doctor.address}</p>
                            <p className="mobileDOC">{doctor.mobile}</p>
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