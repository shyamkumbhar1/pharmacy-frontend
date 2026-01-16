# Pharmacy Management System - Frontend

React.js admin panel for Pharmacy Management System

## Technology Stack
- React.js 18+
- React Router
- Vite
- Axios
- html5-qrcode (for barcode scanning)

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- Role-based access control (Admin, Pharmacist)
- Medicine management with barcode scanning
- Stock monitoring with 10% threshold alerts
- Barcode entries dashboard
- Subscription management
- Admin panel for user and payment management

## Environment Variables

Create a `.env` file:
```
VITE_API_URL=http://localhost:8000/api
```

## Docker

Build and run with Docker:
```bash
docker-compose up -d
```

