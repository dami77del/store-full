# E-Commerce Store

This repository contains the source code for a modern and high-performance e-commerce store. The application is built using a robust and scalable technology stack, designed to offer an optimized and secure user experience.

## Project Description

This project demonstrates how to create a comprehensive e-commerce store using the following technologies:

- **Next.js**: A React framework for modern web applications with server-side rendering and static site generation.
- **Kinde-Auth**: An easy-to-integrate authentication and authorization service for managing users and permissions.
- **Neon**: A highly scalable and high-performance PostgreSQL database.
- **Upstash**: A scalable Redis database for caching and real-time tasks.
- **Prisma**: A modern and powerful ORM that simplifies database interactions.
- **Stripe**: A complete payment platform for securely handling transactions.
- **Tailwind CSS**: A utility-first CSS framework for quickly designing user interfaces.

## Key Features

- **Authentication and Authorization**: Secure user management with Kinde-Auth.
- **Product Catalog**: Browse and search products using Prisma and Neon.
- **Shopping Cart**: Functionality to add, remove, and update products in the cart.
- **Payment Processing**: Integration with Stripe to handle payments and transactions securely.
- **Caching**: Utilizing Upstash to enhance performance by caching frequently accessed data.
- **Responsive UI**: Adaptive and responsive design using Tailwind CSS.

## Installation and Execution

To clone and run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/dami77del/portfolio-React.git
cd portfolio-React

# Install dependencies
npm install

# Set up environment variables
cat <<EOT >> .env
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
DATABASE_URL=your_database_url
REDIS_URL=your_redis_url
KINDE_AUTH_KEY=your_kinde_auth_key
EOT

# Start the application
npm run dev
