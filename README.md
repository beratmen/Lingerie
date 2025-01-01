# Lingerie E-commerce Website

A modern, full-stack e-commerce website built with Next.js, focusing on lingerie and intimate apparel products.

## Features

- 🛍️ Product browsing with categories (Bras, Panties, Sets, Sleepwear, Clothing, Accessories)
- 🔍 Advanced search functionality
- 🛒 Shopping cart management
- 👤 User authentication and account management
- 📱 Responsive design for all devices
- 🔐 Admin dashboard for product and user management
- 💳 Secure checkout process
- ❤️ Wishlist functionality
- 🖼️ Image optimization for product photos

## Tech Stack

- **Frontend:**
  - Next.js 13+ (App Router)
  - React
  - TypeScript
  - Tailwind CSS
  - Lucide Icons

- **Backend:**
  - Next.js API Routes
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

- **Authentication:**
  - JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB installed and running
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/beratmen/Lingerie.git
```

2. Navigate to the project directory:
```bash
cd Lingerie
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── src/
│   ├── app/              # Next.js 13 app directory
│   ├── components/       # Reusable React components
│   ├── contexts/         # React Context providers
│   ├── data/            # Static data and types
│   └── middleware.ts     # Next.js middleware
├── public/              # Static files
├── config/             # Configuration files
├── models/             # MongoDB models
├── routes/             # Express routes
└── scripts/            # Utility scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Berat MEN - [GitHub](https://github.com/beratmen)

Project Link: [https://github.com/beratmen/Lingerie](https://github.com/beratmen/Lingerie)
