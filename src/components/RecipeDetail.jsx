// src/components/RecipeDetail.js
import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, onBack }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail-container">
      <button className="back-button" onClick={onBack}>
        ← Back to Recipes
      </button>
      
      <div className="recipe-detail">
        {/* Recipe Image */}
        <div className="recipe-image-section">
          <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
          <div className="image-overlay">
            <h1 className="recipe-title">{recipe.name}</h1>
            <div className="recipe-badges">
              <span className="category-badge">{recipe.category}</span>
              <span className="rating-badge">⭐ {recipe.rating}</span>
              <span className="time-badge">⏱️ {recipe.prepTime}</span>
              <span className="difficulty-badge">⚡ {recipe.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="recipe-content-section">
          <div className="recipe-description">
            <p>{recipe.description}</p>
          </div>

          <div className="recipe-details-grid">
            {/* Ingredients Section */}
            <div className="ingredients-card">
              <h2>📋 Ingredients</h2>
              <ul className="ingredients-list">
                {recipe.ingredients && recipe.ingredients.length > 0 ? (
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      <span className="ingredient-checkbox">□</span>
                      {ingredient}
                    </li>
                  ))
                ) : (
                  <p className="no-data">Ingredients not available for this recipe.</p>
                )}
              </ul>
            </div>

            {/* Instructions Section */}
            <div className="instructions-card">
              <h2>👨‍🍳 Instructions</h2>
              <ol className="instructions-list">
                {recipe.instructions && recipe.instructions.length > 0 ? (
                  recipe.instructions.map((instruction, index) => (
                    <li key={index} className="instruction-step">
                      <span className="step-number">{index + 1}</span>
                      <div className="step-content">
                        {instruction}
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="no-data">Instructions not available for this recipe.</p>
                )}
              </ol>
            </div>
          </div>

          {/* Additional Info */}
          <div className="recipe-tips">
            <h3>💡 Chef's Tips</h3>
            <p>• Serve hot for best taste</p>
            <p>• Adjust spices according to your preference</p>
            <p>• Perfect for {recipe.category} occasions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;