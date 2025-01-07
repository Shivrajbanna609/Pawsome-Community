import { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import './PetPage.css';
import Navbar from '../../components/Navbar/Navbar';

export default function PetPage() {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  
  const [filters, setFilters] = useState({
    type: '',
    breed: '',
    age: '',
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const fetchPets = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/pets/getallpet');
      const data = await response.json();
      if (data.success) {
        setPets(data.pets);
      } else {
        console.error('Failed to fetch pets:', data.message);
      }
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const toggleFavorite = (pet) => {
    setFavorites((prev) =>
      prev.some(favPet => favPet._id === pet._id)
        ? prev.filter((favPet) => favPet._id !== pet._id)
        : [...prev, pet]
    );
  };

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters(prev => ({ ...prev, [name]: value }));
  // };

  // const applyFilters = () => {
  //   const newFilters = Object.entries(filters)
  //     .filter(([key, value]) => value !== '')
  //     .map(([key, value]) => ({ key, value }));
  //   setSelectedFilters(newFilters);
  //   // Here you would typically call an API with the new filters
  //   // For now, we'll just log the filters
  //   console.log('Applying filters:', filters);
  // };

  const removeFilter = (filterToRemove) => {
    setSelectedFilters(prev => prev.filter(filter => filter.key !== filterToRemove.key));
    setFilters(prev => ({ ...prev, [filterToRemove.key]: '' }));
  };

  return (
    <>
      <Navbar />
      <div className="pet-page">
        {/* <section className="filters-section">
          <div className="filters-container">
            <div className="filter-group">
              <label htmlFor="type">Pet Type</label>
              <select id="type" name="type" value={filters.type} onChange={handleFilterChange}>
                <option value="">All Types</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="breed">Breed</label>
              <select id="breed" name="breed" value={filters.breed} onChange={handleFilterChange}>
                <option value="">All Breeds</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="age">Age</label>
              <select id="age" name="age" value={filters.age} onChange={handleFilterChange}>
                <option value="">Any Age</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <button className="filter-button" onClick={applyFilters}>Apply Filters</button>
          </div>
        </section> */}

        {selectedFilters.length > 0 && (
          <section className="selected-filters">
            <h2>Selected Filters</h2>
            <div className="filter-tags">
              {selectedFilters.map((filter) => (
                <span key={filter.key} className="filter-tag">
                  {filter.key}: {filter.value}
                  <button onClick={() => removeFilter(filter)}><X size={16} /></button>
                </span>
              ))}
            </div>
          </section>
        )}

<main className="main-content">
          <section className="pets-grid">
            {pets.map((pet) => (
              <div key={pet._id} className="pet-card">
                <div className="pet-image">
                  <img src={pet.image || '/default-pet.jpg'} alt={pet.name} />
                  <button
                    className={`favorite-button ${favorites.some(favPet => favPet._id === pet._id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(pet)}
                  >
                    <Heart className="heart-icon" />
                  </button>
                </div>
                <div className="pet-info">
                  <h3>{pet.name}</h3>
                  <p>Age: {pet.age}</p>
                  <p>Breed: {pet.breed}</p>
                </div>
                <button className="adopt-button" variant="secondary"> Adopt Now </button>
              </div>
            ))}
          </section>

          <div className="pagination">
            <button className="pagination-arrow">&lt;</button>
            <div className="pagination-numbers">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={`pagination-number ${num === 1 ? 'active' : ''}`}
                >
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
    </>
  );
}

