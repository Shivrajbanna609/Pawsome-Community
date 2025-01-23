import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import "./PetPage.css"
import Navbar from "../../components/Navbar/Navbar.js"

export default function PetPage() {
  const [pets, setPets] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedPet, setSelectedPet] = useState(null)

  useEffect(() => {
    fetchPets()
  }, [])

  const fetchPets = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/pets/getallpet")
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

  const toggleFavorite = (petId) => {
    setFavorites((prev) => (prev.includes(petId) ? prev.filter((id) => id !== petId) : [...prev, petId]))
  }

  const openPopup = (pet) => {
    setSelectedPet(pet)
  }

  const closePopup = () => {
    setSelectedPet(null)
  }

  return (
    <>
      <Navbar />
      <div className="pet-page">
        <main className="main-content">
          <section className="pets-grid">
            {pets.map((pet) => (
              <div key={pet._id} className="pet-card">
                <div className="pet-image">
                  <img src={pet.image || "default-pet.jpg"} alt={pet.name} />
                  <button
                    className={`favorite-button ${favorites.includes(pet._id) ? "active" : ""}`}
                    onClick={() => toggleFavorite(pet._id)}
                  >
                    <Heart className="heart-icon" />
                  </button>
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
              <strong>Description:</strong> {selectedPet.description || "No description available."}
            </p>
            <button className="confirm-adopt-button">Confirm Adoption</button>
          </div>
        </div>
      )}
    </>
  )
}

