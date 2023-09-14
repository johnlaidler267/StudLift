# Student Lifter
## An Athleisure E-Commerce Platform

### Server

This code sets up a basic configuration for a web server using Express.js to create a RESTful API. It imports required modules like Express.js and CORS middleware, loads environment variables, and defines routes for handling record-related requests. The server listens on a specified port, and when started, it logs a message indicating the server is running on that port.

### Router

An Express.js router that handles various routes related to user registration, user details retrieval, and updates to user information in your application. Here's a breakdown of the key features and routes:

#### User Registration (`/register - POST`)

- Handles user registration by receiving user data in the request body.
- Creates a new user document in the database with default address, card, and cart information.
- Performs data validation and sanitization for user input.
- Responds with a success status code (204) upon successful registration.

#### User Details Retrieval (`/:id - GET`)

- Retrieves user details by Firebase ID from the database.
- Responds with the user's details if found (status 200) or "Not found" (status 404) if the user doesn't exist.

#### Update Shipping Address (`/updateShipping/:id - PATCH`)

- Updates the user's shipping address based on the provided Firebase ID and new shipping address data.
- Responds with a success status code (200) upon successful update.

#### Update Billing Address (`/updateBilling/:id - PATCH`)

- Updates the user's billing address based on the provided Firebase ID and new billing address data.
- Responds with a success status code (200) upon successful update.

#### Update Credit Card Information (`/updateCard/:id - PATCH`)

- Updates the user's credit card information based on the provided Firebase ID and new card data.
- Allows for marking a card as the default card.
- Responds with a success status code (200) upon successful update.

#### Add New Credit Card (`/addCard/:id - PATCH`)

- Adds a new credit card to the user's card list based on the provided Firebase ID and card data.
- Responds with a success status code (200) upon successful addition.

#### Retrieve Products by Type (`/:dbName/:type - GET`)

- Retrieves products from a specified database collection based on the product type.
- Supports retrieving all products or products of a specific type.
- Responds with the matching products if found (status 200) or "Not found" (status 404) if none are found.

#### Retrieve a Singular Product by ID (`/getProductByID/:dbName/:productID - GET`)

- Retrieves a single product by its ID from a specified database collection.
- Responds with the product data if found (status 200) or "Not found" (status 404) if the product doesn't exist.

#### Update User's Cart (`/updateCart/:id - PATCH`)

- Updates the user's cart based on the provided Firebase ID and new cart data.
- Responds with a success status code (200) upon successful update.

#### Update User's Orders (`/updateOrders/:id - PATCH`)

- Updates the user's order history based on the provided Firebase ID and new order data.
- Responds with a success status code (200) upon successful update.

### Login/Register

#### Register

Represents a user registration form for creating a new user account. It includes various form fields such as email, password, confirm password, gender, date of birth, first name, and last name. Users can also choose to receive email marketing notifications. The form handles user registration by creating a Firebase authentication account and sending user data to a MongoDB database via a POST request to a backend API endpoint.

#### Login

Provides options for users to log in using their email and password or using Google Sign-In. The component handles form input for email and password and has functionality to authenticate users via Firebase. It also includes links for password recovery and user registration.

### User Account

#### Edit-Details Page

Includes features for user authentication, displaying user information, managing billing and shipping addresses, payment methods, and order history. The component uses React and several external libraries like react-bootstrap and Material-UI. It also communicates with Firebase for user authentication and data retrieval. The component is organized into sections for the sidebar menu and the main content area, making it easy for users to navigate and manage their account details.

### Product Pages

Responsible for displaying all men's/women’s products. It fetches product cards from a database, filters them using a FilterBar component, and renders them in a responsive grid layout. There are various sub-pages that direct to more specific items (e.g., “men’s pants). It uses various styles and Bootstrap components for the layout and design.

### Accessories

Provides functionality for browsing and filtering accessories. It utilizes React along with react-bootstrap components for the layout. The component fetches a list of product cards from a database using the getProductCards function. It displays these product cards in different tabs based on their category, such as headwear, bags, socks, equipment, and bottles. Users can switch between categories using the tab bar.

The page also includes a filter bar. The product cards are dynamically rendered in a grid layout, making it easy for users to browse and select accessories.

### Checkout

#### Cart

The cart page displays a list of items with their names, quantities, and subtotals. It also calculates and displays the total price of the items in the cart. Users can continue shopping or proceed to checkout.

#### Information

Includes various features such as user authentication, form fields for shipping information, a timeline for the checkout steps, and options for express checkout using PayPal or Google Pay. Users can navigate between the cart, shipping information, and the final order placement.

#### Shipping

Includes various features such as displaying user contact and shipping details, selecting a shipping method (Standard or Express), and providing options to navigate back to the information page or proceed to the payment page.

#### Payment

It includes various features such as displaying user contact, shipping, and selected shipping method details, selecting a payment method (credit card), entering billing information, and providing options to navigate back to the shipping page or proceed with payment.

#### Order Confirmation

It is displayed after a user has successfully placed an order. The page provides information about the order, including an order number, a summary of items in the cart, subtotal, shipping method, and total cost.

### Navbar

Includes links for different categories like Women, Men, and Accessories, a search icon, heart icon (for wishlist), user profile icon, and a shopping cart icon. It also handles user authentication, displays user-related content based on authentication status, and can open a pop-up shopping cart modal when the cart icon is clicked.

### Cart Modal

Includes a close button, a list of items with details such as product image, name, price, and quantity, and options for checkout and viewing the full cart.

### Search
//TODO

### Wishlist
//TODO
