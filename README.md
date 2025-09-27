🌶️ Tadka Tales: Authentic Indian Cuisine Explorer
Tadka Tales is a premium web application dedicated to showcasing authentic Indian recipes. It provides a sleek, categorized, and searchable interface for users to easily discover dishes from different regions and meal types.

✨ Features
Multi-Page Navigation: Seamless routing between three main sections:

Home: Headline, "About Us" summary, and featured recipes preview.

Recipes (Menu): The full, searchable dish index.

About: Detailed information on the "Tadka Tales" concept.

Dynamic Filtering: Users can filter the recipe index by meal category (Breakfast, Lunch, Dinner, Snacks).

Live Search: A search bar on the 'Recipes' page allows instant filtering of dishes by name or description.

Full-Screen Recipe Modal: Detailed ingredients and step-by-step instructions are displayed in an immersive, full-screen overlay for focused reading.

Premium Design: Features an elegant and rich color palette (Deep Brown and Gold accents) suitable for a fine-dining culinary experience.

💻 Tech Stack
Frontend Framework: React

Build Tool: Vite

Styling:CSS 

State Management: React Hooks (useState, useEffect, useCallback, useMemo) for efficient state and performance optimization.

🚀 Getting Started
To run this project locally, you will need Node.js and npm (or yarn/pnpm) installed.

Installation
Clone the Repository (Simulated Step):

git clone [your-repo-link]
cd tadka-tales-app

Install Dependencies:

npm install
# or yarn install

Start the Development Server:

npm run dev
# or yarn dev

The application will now be running on http://localhost:5173 (or a similar port).

🗃️ Project Structure Note
For simplicity and ease of viewing in a single file environment, all data (DISHES), components (Header, Footer, DishCard, RecipeModal), and the main application logic (App, HomeView, RecipesView, AboutView) are contained within the single file: IndianCuisineApp.jsx. In a production application, these would be split into dedicated files and folders (e.g., src/data/, src/components/, src/pages/).

✍️ Customization
Data: Modify the DISHES array at the top of IndianCuisineApp.jsx to add, edit, or remove recipes.

Styling: Adjust the Tailwind CSS classes (e.g., bg-stone-800, bg-amber-500) to change the primary and accent colors of the premium theme.
