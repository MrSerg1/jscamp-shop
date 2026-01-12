# jscamp-shop
Ecommerce Practice Project | React + Vite
This project is a dedicated practice environment developed during my Fullstack Bootcamp. The primary focus is to master Frontend development using React, emphasizing modular architecture, efficient state management, and scalable styling patterns.

🏁 Learning Objectives
Routing: Mastering Single Page Application (SPA) navigation.

Hooks: Implementing useState, useEffect, and useContext/zustand for global state.

Modularity: Organizing components and pages following industry best practices.

Styling: Utilizing CSS Modules for scoped and maintainable styling.

Performance: Leveraging Vite for an optimized development workflow.

🛠️ Tech Stack
React 18

Vite (Build tool)

React Router DOM (Navigation)

CSS Modules (Isolated styling)

Vanilla CSS (Strengthening core layout skills without external UI libraries)

📂 Project Structure
The architecture is designed to be scalable and maintainable:

Plaintext

src/
├── assets/        # Images and static resources
├── components/    # Reusable UI components (Buttons, Cards, Navbar)
├── context/       # Global State (Shopping Cart Context)
├── pages/         # Main views (each with its own .module.css)
│   ├── Home/
│   ├── Product/
│   └── Cart/
├── styles/        # Global styles and CSS variables
├── App.jsx        # Route configuration
└── main.jsx       # Entry point
🚀 Features to Implement
Product Catalog: Dynamic rendering of products from a JSON or mock API.

Product Details: Dynamic routing to display specific item specifications.

Shopping Cart: Functional system to add/remove items and calculate totals.

Responsive Design: Fully adaptive interface for mobile and desktop.

🧠 Technical Challenges (Roadmap)
To push the boundaries of my frontend skills, I have set the following milestones:

[ ] Dynamic Routing: Implement useParams to fetch and display unique data for each product page.

[ ] Cart Persistence: Use localStorage within a useEffect hook to ensure the shopping cart survives page refreshes.

[ ] Custom Hooks: Create a useFetch hook to handle API calls or data simulation cleanly.

[ ] Skeleton Screens: Implement loading states (Skeletons) to improve User Experience (UX) while data is being "fetched".

[ ] Complex Filtering: Create a logic to filter products by category or price range without using external libraries.

[ ] Form Validation: Build a checkout form using controlled components and manual validation logic.

🛠️ Installation & Setup

Clone the repository:
git clone https://github.com/MrSerg1/jscamp-shop.git

Install dependencies:
npm install

Run in development mode:
npm run dev