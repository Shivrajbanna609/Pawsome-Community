import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import './Favourite.css';
import Navbar from '../../components/Navbar/Navbar';

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorite = (petId) => {
    const updatedFavorites = favorites.filter(pet => pet._id !== petId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  return (
    <>
      <Navbar />
      <div className="pet-page">
        <main className="main-content">
          <h1>My Favorite Pets</h1>
          {favorites.length === 0 ? (
            <p>You haven't added any pets to your favorites yet.</p>
          ) : (
            <section className="pets-grid">
              {favorites.map((pet) => (
                <div key={pet._id} className="pet-card">
                  <div className="pet-image">
                    <img src={pet.image || '/default-pet.jpg'} alt={pet.name} />
                    <button
                      className="favorite-button active"
                      onClick={() => removeFavorite(pet._id)}
                    >
                      <Heart className="heart-icon" />
                    </button>
                  </div>
                  <div className="pet-info">
                    <h3>{pet.name}</h3>
                    <p>Age: {pet.age}</p>
                    <p>Breed: {pet.breed}</p>
                  </div>
                  <button className="adopt-button"  variant="secondary"> Adopt Now </button>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Favourite;

