import React, { useState, useRef } from 'react';
import './HomeView.css';
import featuredRecipes from '../data/recipesData';
import RecipeDetail from './RecipeDetail';

const HomeView = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const featuredSectionRef = useRef(null);
  const displayedRecipes = showAll ? featuredRecipes : featuredRecipes.slice(0, 6);

  const scrollToRecipes = () => {
    featuredSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  // Show recipe detail if a recipe is selected
  if (selectedRecipe) {
    return <RecipeDetail recipe={selectedRecipe} onBack={handleBackToRecipes} />;
  }

  return (
    <div className="home-container">
      {/* Hero Section - Screen Length */}
      <section className="hero-section"  id="home-section">
        <div className="hero-content">
          <h1>From Grandma's Kitchen to Your Home</h1>
          <p className="hero-subtitle">Indian Authentic - A Legacy of Flavors</p>
          <p className="hero-description">
            Discover the treasure trove of unique spices, traditional techniques, and recipes passed down through generations. 
            Fill your kitchen with the aroma of special dishes curated from every corner of India.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">Start Cooking Now</button>
            <button className="explore-button" onClick={scrollToRecipes}>
              Explore Recipes
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://favim.com/pd/p/orig/2019/01/04/aesthetic-indian-food-india-Favim.com-6759041.jpg" alt="Indian Food Spread" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about-section">
        <div className="about-content">
          <h2>About Our Kitchen</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">👨‍🍳</div>
              <h3>Traditional Recipes</h3>
              <p>Authentic recipes learned from grandmothers' hands, still as delicious as ever.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🌶️</div>
              <h3>Regional Specialties</h3>
              <p>Explore diverse regional cuisines from Kashmir to Kanyakumari, each with unique spices and cooking styles.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🥘</div>
              <h3>Step-by-Step Guidance</h3>
              <p>Detailed instructions with tips and tricks to help you master Indian cooking, even if you're a beginner.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">📜</div>
              <h3>Cultural Heritage</h3>
              <p>Each recipe comes with cultural significance and history, connecting you to India's rich culinary heritage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-section" id="featured-section" ref={featuredSectionRef}>
        <div className="section-header">
          <h2>Featured Indian Recipes</h2>
          <p>Handpicked traditional dishes that represent the essence of Indian cuisine</p>
        </div>
        
        <div className="recipe-grid">
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.name} />
                <span className="recipe-category">{recipe.category}</span>
              </div>
              <div className="recipe-content">
                <h3>{recipe.name}</h3>
                <div className="recipe-info">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>⚡ {recipe.difficulty}</span>
                  <span className="rating">⭐ {recipe.rating}</span>
                </div>
                <p className="recipe-description">{recipe.description}</p>
                <button 
                  className="view-recipe-btn"
                  onClick={() => handleViewRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && featuredRecipes.length > 6 && (
          <div className="explore-more-container">
            <button 
              className="explore-more-btn"
              onClick={() => setShowAll(true)}
            >
              Explore More Authentic Recipes ({featuredRecipes.length - 6} more)
            </button>
          </div>
        )}

        {showAll && (
          <div className="explore-more-container">
            <button 
              className="show-less-btn"
              onClick={() => setShowAll(false)}
            >
              Show Less Recipes
            </button>
          </div>
        )}
      </section>

      {/* Indian Cuisine Stats Section */}
      <section className="stats-section">
        <h2>Why Indian Cuisine?</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Years of Culinary History</p>
          </div>
          <div className="stat-item">
            <h3>29</h3>
            <p>States with Unique Cuisines</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Traditional Spices Used</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Authentic Recipes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;