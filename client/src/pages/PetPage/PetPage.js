import { useState, useEffect, useContext } from "react"
import "./PetPage.css"
import Navbar from "../../components/Navbar/Navbar.js"
import { AppContext } from "../../Context/AppContect.jsx"
import { useNavigate } from "react-router-dom"

export default function PetPage() {
  const [pets, setPets] = useState([])
  const [selectedPet, setSelectedPet] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const { backendurl, isLoggedin} = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login")
    } else {
      fetchPets()
    }
  }, [isLoggedin, navigate])

  const fetchPets = async () => {
    try {
      const response = await fetch(`${backendurl}/api/pets/getallpet`)
      const data = await response.json()
      if (data.success) {
        setPets(data.pets)
      } else {
        console.error("Failed to fetch pets:", data.message)
      }
    } catch (error) {
      console.error("Error fetching pets:", error)
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const openPopup = (pet) => {
    setSelectedPet(pet)
  }

  const closePopup = () => {
    setSelectedPet(null)
  }

  if (!isLoggedin) {
    return null // Return null while redirecting
  }

  return (
    <>
      <Navbar />
      <div className="pet-page">
        <main className="main-content">
          <div className="search-bar">
            <input type="text" placeholder="Search by breed..." value={searchTerm} onChange={handleSearch} />
          </div>
          <section className="pets-grid">
            {pets
              .filter((pet) => pet.breed.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((pet) => (
                <div key={pet._id} className="pet-card">
                  <div className="pet-image">
                    <img src={pet.image || "default-pet.jpg"} alt={pet.name} />
                  </div>
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p>Age: {pet.age}</p>
                    <p>Breed: {pet.breed}</p>
                    <button className="adopt-button" onClick={() => openPopup(pet)}>
                      Adopt Now
                    </button>
                  </div>
                </div>
              ))}
          </section>

          <div className="pagination">
            <button className="pagination-arrow">&lt;</button>
            <div className="pagination-numbers">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} className={`pagination-number ${num === 1 ? "active" : ""}`}>
                  {num}
                </button>
              ))}
              <span>...</span>
              <button className="pagination-number">10</button>
            </div>
            <button className="pagination-arrow">&gt;</button>
          </div>
        </main>
      </div>
      {selectedPet && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={closePopup}>
              &times;
            </button>
            <h2>{selectedPet.name}</h2>
            <img src={selectedPet.image || "default-pet.jpg"} alt={selectedPet.name} />
            <p>
              <strong>Age:</strong> {selectedPet.age}
            </p>
            <p>
              <strong>Breed:</strong> {selectedPet.breed}
            </p>
            <p>
              <strong>Contact:</strong> {selectedPet.mobileNumber}
            </p>
            <p>
              <strong>Description:</strong> {selectedPet.description || "No description available."}
            </p>
            <button className="confirm-adopt-button">Confirm Adoption</button>
          </div>
        </div>
      )}
    </>
  )
}

