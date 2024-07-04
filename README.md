## 🛍️ Shopping cart application

This is a simple shopping cart application built with React and TypeScript. The application displays a list of products, allows users to view product details, and manage their shopping cart with a side drawer.

- `/products`: Displays the main page listing all products.
- `/products/:productId`: Displays details for a specific post, where `:productId` is the unique identifier of the product.
- `/`: Redirects automatically to the `/products` page.

Other undefined routes will show a "Not Found" page, handling all navigation cases that do not match the existing routes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **Prettier**: An opinionated code formatter.
- **React Router**: Declarative routing for React, used to manage navigation from one view to another.

## Setup and Installation

To get started with this project, clone the repository and follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/bojanpisic/shopping-cart.git
   cd shopping-cart
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the local server at http://localhost:5173.

## Building for Production

To build the application for production, run the following command:

```bash
 npm run build
```

This command triggers the Vite build process, optimizing and bundling the code for deployment.

```

```
