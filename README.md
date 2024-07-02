Book Store Frontend Application

Table of Contents:
1. Introduction
2. Features
3. Project Structure
4. Technologies Used
5. Getting Started
6. Usage
7. Deployment
8. Contributing
9. License


Introduction:
Welcome to the Book Store Frontend Application! This project is designed to showcase my React skills through a fully functional and user-friendly book store interface. The application allows users to browse, search, and view details of various books.

Features:
Book Listing: View a list of books with details like title, author, price, and rating.
Book Search: Search for books by title, category, or author.
Book Details: View detailed information about each book.
Responsive Design: The application is responsive and works well on different devices.
Routing: Navigate between different pages using React Router.
State Management: Manage global state using Redux.

Project Structure:
book-store/

├── dist/

│   ├── assets/

│   │   ├── backgroundImage-TvkeL4-0.jpeg

│   │   ├── index-1mnapi0X.js

│   │   └── index-B1Sb0IbG.css

│   └── index.html

├── public/

│   ├── favicon.ico

│   └── ...

├── src/

│   ├── components/

│   │   └── ...

│   ├── features/

│   │   ├── auth/

│   │   │   ├── authSlice.js

│   │   │   └── ...

│   │   ├── cart/

│   │   │   ├── cartSlice.js

│   │   │   └── ...

│   │   ├── wishlist/

│   │   │   ├── wishlistSlice.js

│   │   │   └── ...

│   │   └── ...

│   ├── pages/

│   │   ├── HomePage.jsx

│   │   ├── LoginPage.jsx

│   │   ├── SignUpPage.jsx

│   │   └── ...

│   ├── App.jsx

│   ├── main.jsx

│   └── ...

├── .gitignore

├── index.html

├── package.json

├── postcss.config.js

├── vite.config.js

└── ...



Technologies Used:
React: JavaScript library for building user interfaces
Redux: State management library
React Router: For routing
CSS Modules: Scoped and maintainable CSS
Netlify: For deployment

Getting Started:
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Node.js 
npm or yarn

Installation:
Clone the repository:
git clone https://github.com/mayank12112000/Book-Store.git
Navigate to the project directory:
cd Book-Store

Install the dependencies:
npm install

Running the Application:
Start the development server:

npm run dev

Open your browser and go to http://localhost:3000 to view the application.

Home Page: Displays a list of books with their details.
Search: Use the search bar to find books by title, category, or author.
Book Details: Click on a book to view more details about it.

To manually deploy:

Build the application:
npm run build

Handling Routing Issues on Netlify
To handle routing issues, create a _redirects file in the public folder with the following content:

/*    /index.html   200
This ensures that all routes are redirected to index.html, allowing React Router to handle the routing.

Contributing:
Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

License:
This project is licensed under the MIT License. 